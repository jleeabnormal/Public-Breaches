import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white-01 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Abnormal
          </Link>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-black-02" />
            <Button variant="default" className="bg-black-02 text-white-01 hover:bg-purple-warm-04">
              See a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

