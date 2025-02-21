import { getBreachArticle } from "@/lib/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Header from "../../components/Header"
import WistiaVideo from "../../components/WistiaVideo"

export default async function BreachPage({ params }: { params: { id: string } }) {
  const article = await getBreachArticle(params.id)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="min-h-screen bg-white-01">
      <div id="main-content" className="transition-all duration-300">
        <Header />

        {/* Updated Hero Section with Video */}
        <div className="bg-gradient-to-r from-green-05 to-purple-gray-01">
          <div className="container mx-auto px-4 py-12 h-[431px] max-w-[1300px]">
            <div className="flex h-full items-center">
              <div className="w-3/5 pr-8">
                <div className="text-sm text-purple-01 mb-4">Attack Library / Breach Details</div>
                <h1 className="text-4xl font-bold text-title-purple mb-4">{article.titleOfBreach}</h1>
                <p className="text-base text-purple-01 max-w-xl">{article.summary}</p>
              </div>
              <div className="w-2/5 flex items-center justify-start">
                <div className="w-[300px] h-[300px]">
                  <WistiaVideo
                    videoId={article.wistiaVideoId}
                    thumbnailUrl={article.thumbnailPicture.url}
                    thumbnailWidth={article.thumbnailPicture.width}
                    thumbnailHeight={article.thumbnailPicture.height}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-black-02 mb-4">What is the Attack?</h2>
              <div className="prose text-purple-01">{documentToReactComponents(article.whatIsTheAttack.json)}</div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black-02 mb-4">Why Did It Get Through?</h2>
              <div className="prose text-purple-01">{documentToReactComponents(article.whyDidItGetThrough.json)}</div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black-02 mb-4">What is Required to Solve?</h2>
              <div className="prose text-purple-01">
                {documentToReactComponents(article.whatIsRequiredToSolve.json)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

