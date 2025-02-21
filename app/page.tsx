import { getBreachArticles } from "@/lib/contentful"
import Link from "next/link"
import Header from "./components/Header"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import WistiaVideo from "./components/WistiaVideo"

export default async function Home() {
  const breachArticles = await getBreachArticles()

  return (
    <div className="min-h-screen">
      <div id="main-content" className="transition-all duration-300">
        <Header />

        {/* Updated Hero Section with adjusted spacing */}
        <div className="bg-gradient-to-r from-green-05 to-purple-gray-01">
          <div className="container mx-auto px-4 py-12 h-[431px] max-w-[1300px]">
            <div className="flex h-full items-center">
              <div className="w-3/5 pl-[100px] pr-8">
                <h1 className="text-[70px] leading-tight font-bold text-title-purple mb-3">Public Breach Repository</h1>
                <p className="text-sm text-purple-01 max-w-xl">
                  Gain a new perspective on the latest public breaches impacting the biggest companies in the world and
                  the need for a new generation of tools to keep ecosystems safe.
                </p>
              </div>
              <div className="w-2/5 flex items-center justify-start">
                <div className="w-[300px] h-[300px]">
                  <WistiaVideo
                    videoId="s0e4u43ea5"
                    thumbnailUrl={breachArticles[0]?.thumbnailPicture.url || "https://picsum.photos/300/300"}
                    thumbnailWidth={breachArticles[0]?.thumbnailPicture.width || 300}
                    thumbnailHeight={breachArticles[0]?.thumbnailPicture.height || 300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-4 mb-8">
            <div className="relative">
              <Button variant="outline" className="flex items-center gap-2">
                Filter by type
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search repository..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
              />
            </div>
          </div>

          {/* Breach List */}
          <div className="bg-white rounded-lg shadow">
            <div className="grid grid-cols-12 p-4 border-b text-sm font-medium text-purple-01">
              <div className="col-span-2">Date</div>
              <div className="col-span-8">Title & Description</div>
              <div className="col-span-2">Type</div>
            </div>

            {breachArticles.map((article) => (
              <Link
                href={`/breach/${article.sys.id}`}
                key={article.sys.id}
                className="grid grid-cols-12 p-4 border-b hover:bg-purple-gray-01 transition-colors"
              >
                <div className="col-span-2 text-sm text-purple-01">January 24, 2025</div>
                <div className="col-span-8">
                  <h3 className="text-entry-purple font-medium mb-1">{article.titleOfBreach}</h3>
                  <p className="text-sm text-purple-01">{article.summary}</p>
                </div>
                <div className="col-span-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-gray-02 text-purple-01">
                    Public Breach
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

