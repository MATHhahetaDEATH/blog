import type { QuartzComponentConstructor } from "../../../../quartz/components/types"

export interface FooterLink {
  label: string
  href: string
  description?: string
}

export interface FooterOptions {
  quickLinks?: FooterLink[]
  aboutLinks?: FooterLink[]
  links?: FooterLink[]
  socialLinks?: FooterLink[]
}

export declare const Footer: QuartzComponentConstructor<FooterOptions>
