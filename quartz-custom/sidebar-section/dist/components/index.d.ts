export interface SidebarSectionOptions {
  title?: string
  href?: string
  folder?: string
  showPreview?: boolean
  previewLabel?: string
  previewChars?: number
}
export declare const SidebarSection: (userOpts?: SidebarSectionOptions) => any
