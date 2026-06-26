import type { QuartzComponentConstructor } from "../../../../quartz/components/types"

export interface SiteLogoOptions {
  href?: string
  src?: string
  alt?: string
  width?: number
  height?: number
}

export declare const SiteLogo: QuartzComponentConstructor<SiteLogoOptions>
