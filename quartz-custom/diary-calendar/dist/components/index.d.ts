import type { QuartzComponentConstructor } from "../../../../quartz/components/types"

export interface DiaryCalendarOptions {
  folder?: string
  title?: string
  recentLabel?: string
  weekStartsOn?: number
}

export declare const DiaryCalendar: QuartzComponentConstructor<DiaryCalendarOptions>
