export interface GiscusCommentsOptions {
  repo?: string
  repoId?: string
  category?: string
  categoryId?: string
  mapping?: "url" | "title" | "og:title" | "specific" | "number" | "pathname"
  strict?: boolean
  reactionsEnabled?: boolean
  emitMetadata?: boolean
  inputPosition?: "top" | "bottom"
  theme?: string
  lang?: string
}
export declare const GiscusComments: (userOpts?: GiscusCommentsOptions) => any
