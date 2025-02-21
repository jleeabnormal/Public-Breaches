import type { BreachArticle } from "@/types/breachArticle"

// WARNING: Hardcoding these values is not recommended for production use.
// This is only for demo/testing purposes.
const CONTENTFUL_SPACE_ID = "6vsl030f59b1"
const CONTENTFUL_ACCESS_TOKEN = "J9zfpicU5dmaHU7WzAHrfxpX0cUE3m7014g6GdLBG5M"

const query = `
  query {
    breachRepositoryArticlesCollection {
      items {
        sys {
          id
        }
        titleOfBreach
        summary
        whatIsTheAttack { json }
        whyDidItGetThrough { json }
        whatIsRequiredToSolve { json }
        breachIcon {
          url
          description
        }
        wistiaVideoId
        thumbnailPicture {
          url
          width
          height
        }
      }
    }
  }
`

export async function getBreachArticles(): Promise<BreachArticle[]> {
  try {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })

    const json = await response.json()
    return json.data.breachRepositoryArticlesCollection.items
  } catch (error) {
    console.error("Error fetching breach articles:", error)
    return []
  }
}

export async function getBreachArticle(id: string): Promise<BreachArticle | null> {
  try {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          query($id: String!) {
            breachRepositoryArticles(id: $id) {
              titleOfBreach
              summary
              whatIsTheAttack { json }
              whyDidItGetThrough { json }
              whatIsRequiredToSolve { json }
              breachIcon {
                url
                description
              }
              wistiaVideoId
              thumbnailPicture {
                url
                width
                height
              }
            }
          }
        `,
        variables: { id },
      }),
    })

    const json = await response.json()
    return json.data.breachRepositoryArticles
  } catch (error) {
    console.error("Error fetching breach article:", error)
    return null
  }
}

