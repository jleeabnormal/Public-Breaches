"use client"

import { useState } from "react"
import Image from "next/image"
import VideoDialog from "./VideoDialog"

interface WistiaVideoProps {
  videoId: string
  thumbnailUrl: string
  thumbnailWidth: number
  thumbnailHeight: number
}

export default function WistiaVideo({ videoId, thumbnailUrl, thumbnailWidth, thumbnailHeight }: WistiaVideoProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsDialogOpen(true)
          }
        }}
        aria-label="Open video"
      >
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt="Video thumbnail"
          width={thumbnailWidth}
          height={thumbnailHeight}
          layout="responsive"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="68" height="48" viewBox="0 0 68 48">
            <path
              className="fill-white opacity-80"
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            ></path>
            <path d="M 45,24 27,14 27,34" fill="#000"></path>
          </svg>
        </div>
      </div>
      <VideoDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} videoId={videoId} />
    </>
  )
}

