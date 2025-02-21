import type { Document } from "@contentful/rich-text-types"

export interface BreachArticle {
  sys: {
    id: string
  }
  titleOfBreach: string
  summary: string
  whatIsTheAttack: { json: Document }
  whyDidItGetThrough: { json: Document }
  whatIsRequiredToSolve: { json: Document }
  breachIcon: {
    url: string
    description: string
  }
  wistiaVideoId: string
  thumbnailPicture: {
    url: string
    width: number
    height: number
  }
}

