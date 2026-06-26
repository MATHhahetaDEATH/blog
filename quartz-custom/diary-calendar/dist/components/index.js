import { h } from "preact"

const toDate = (value) => {
  if (!value) return undefined
  const date = value instanceof Date ? value : new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date
}

const pageDate = (page) =>
  toDate(page.frontmatter?.date) ??
  toDate(page.dates?.published) ??
  toDate(page.dates?.modified) ??
  toDate(page.dates?.created)

const pad = (n) => String(n).padStart(2, "0")

const dateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

const monthLabel = (date, locale) =>
  new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(date)

const formatRecent = (date, locale) =>
  new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", year: "numeric" }).format(date)

const truncate = (value, maxChars = 50) => {
  const chars = Array.from(
    String(value ?? "")
      .replace(/\s+/g, " ")
      .trim(),
  )
  if (chars.length <= maxChars) return chars.join("")
  return `${chars.slice(0, maxChars).join("")}…`
}

const pageText = (page) =>
  page.frontmatter?.description ?? page.description ?? page.text ?? page.frontmatter?.summary ?? ""

const resolveHref = (slug) => {
  if (!slug) return "#"
  return `/${slug.replace(/\/index$/, "/")}`
}

export const DiaryCalendar = (userOpts = {}) => {
  const opts = {
    folder: "dairy",
    title: "ダイアリー",
    recentLabel: "最近のダイアリー",
    weekStartsOn: 1,
    ...userOpts,
  }

  const Calendar = ({ allFiles = [], cfg, displayClass }) => {
    const locale = cfg?.locale ?? "en-US"
    const diaryPages = allFiles
      .filter((page) => page.unlisted !== true)
      .filter((page) => typeof page.slug === "string" && page.slug.startsWith(`${opts.folder}/`))
      .filter((page) => !page.slug.endsWith("/index"))
      .map((page) => ({ page, date: pageDate(page) }))
      .filter((entry) => entry.date)
      .sort((a, b) => b.date.getTime() - a.date.getTime())

    const recentDateKey = diaryPages[0] ? dateKey(diaryPages[0].date) : null
    const recentEntries = recentDateKey
      ? diaryPages.filter((entry) => dateKey(entry.date) === recentDateKey)
      : []
    const recent = recentEntries[0]
    const anchorDate = recent?.date ?? new Date()
    const year = anchorDate.getFullYear()
    const month = anchorDate.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDay = new Date(year, month, 1).getDay()
    const offset = (firstDay - opts.weekStartsOn + 7) % 7
    const activeByDay = new Map()

    for (const entry of diaryPages) {
      if (entry.date.getFullYear() === year && entry.date.getMonth() === month) {
        const list = activeByDay.get(entry.date.getDate()) ?? []
        list.push(entry.page)
        activeByDay.set(entry.date.getDate(), list)
      }
    }

    const cells = []
    for (let i = 0; i < offset; i++) cells.push(h("span", { class: "ksm-calendar-day empty" }))
    for (let day = 1; day <= daysInMonth; day++) {
      const pages = activeByDay.get(day) ?? []
      cells.push(
        pages.length
          ? h(
              "a",
              {
                class: "ksm-calendar-day has-entry",
                href: resolveHref(pages[0].slug),
                "aria-label": `${opts.title} ${year}-${pad(month + 1)}-${pad(day)}`,
                "data-count": String(pages.length),
              },
              h("span", { class: "ksm-calendar-day-number" }, day),
              h(
                "span",
                { class: "ksm-calendar-day-dots", "aria-hidden": "true" },
                Array.from({ length: pages.length }, (_, index) =>
                  h("span", { class: "ksm-calendar-dot", "data-dot-index": String(index) }),
                ),
              ),
            )
          : h("span", { class: "ksm-calendar-day" }, day),
      )
    }

    const weekdays = []
    const base = new Date(2024, 0, 7 + opts.weekStartsOn)
    for (let i = 0; i < 7; i++) {
      const date = new Date(base)
      date.setDate(base.getDate() + i)
      weekdays.push(
        h(
          "span",
          { class: "ksm-calendar-weekday" },
          new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date).slice(0, 2),
        ),
      )
    }

    return h(
      "section",
      { class: ["ksm-diary-calendar", displayClass].filter(Boolean).join(" ") },
      h("a", { class: "ksm-diary-title", href: `/${opts.folder}/` }, opts.title),
      h("div", { class: "ksm-calendar-month" }, monthLabel(anchorDate, locale)),
      h("div", { class: "ksm-calendar-grid ksm-calendar-weekdays" }, weekdays),
      h("div", { class: "ksm-calendar-grid" }, cells),
      recentEntries.length
        ? h(
            "div",
            { class: "ksm-diary-recent" },
            h("span", { class: "ksm-diary-recent-label" }, opts.recentLabel),
            h(
              "div",
              { class: "ksm-diary-recent-list" },
              recentEntries.map((entry) =>
                h(
                  "article",
                  { class: "ksm-diary-recent-item" },
                  h(
                    "a",
                    { href: resolveHref(entry.page.slug), class: "ksm-diary-recent-link" },
                    entry.page.frontmatter?.title ??
                      entry.page.title ??
                      formatRecent(entry.date, locale),
                  ),
                  h(
                    "small",
                    { class: "ksm-diary-recent-text" },
                    truncate(pageText(entry.page), 50),
                  ),
                ),
              ),
            ),
          )
        : h("p", { class: "ksm-diary-empty" }, "No diary entries yet."),
    )
  }

  Calendar.css = `
.ksm-diary-calendar {
  font-family: "Kiwi Maru", var(--bodyFont);
}

.ksm-diary-title {
  display: inline-flex;
  color: var(--dark);
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 1.05rem;
  line-height: 1.2;
}

.ksm-calendar-month {
  margin-top: 0.65rem;
  color: var(--darkgray);
  font-size: 0.84rem;
}

.ksm-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(1.25rem, 1fr));
  gap: 0.2rem;
  margin-top: 0.35rem;
}

.ksm-calendar-weekday {
  color: var(--gray);
  font-size: 0.68rem;
  text-align: center;
}

.ksm-calendar-day {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  min-height: 1.25rem;
  color: var(--darkgray);
  font-size: 0.76rem;
  line-height: 1;
  border-radius: 999px;
  background: transparent;
  position: relative;
}

.ksm-calendar-day.empty {
  visibility: hidden;
}

.ksm-calendar-day.has-entry {
  color: var(--dark);
  background: color-mix(in srgb, var(--secondary) 9%, transparent);
  padding-bottom: 0.42rem;
  min-width: 1.6rem;
}

.ksm-calendar-day-number {
  display: block;
  position: relative;
  z-index: 1;
}

.ksm-calendar-day-dots {
  position: absolute;
  left: 50%;
  bottom: 0.12rem;
  display: inline-flex;
  gap: 0.12rem;
  transform: translateX(-50%);
}

.ksm-calendar-dot {
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 999px;
  background: var(--ksm-theme-accent, var(--secondary));
}

.ksm-diary-recent {
  margin-top: 0.75rem;
}

.ksm-diary-recent-label {
  display: block;
  color: var(--gray);
  font-size: 0.72rem;
  line-height: 1.3;
}

.ksm-diary-recent-link {
  display: inline-block;
  color: var(--secondary);
  font-size: 0.86rem;
  line-height: 1.35;
}

.ksm-diary-recent-item + .ksm-diary-recent-item {
  margin-top: 0.45rem;
}

.ksm-diary-recent-text {
  display: block;
  margin-top: 0.12rem;
  color: var(--gray);
  font-family: "Cactus Classical Serif", var(--bodyFont);
  font-size: 0.76rem;
  line-height: 1.45;
}

.ksm-diary-empty {
  color: var(--gray);
  font-size: 0.78rem;
}
`

  return Calendar
}
