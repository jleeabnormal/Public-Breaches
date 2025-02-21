"use client"

import { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoDialogProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export default function VideoDialog({ isOpen, onClose, videoId }: VideoDialogProps) {
  useEffect(() => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      if (isOpen) {
        mainContent.classList.add("blur-sm")
      } else {
        mainContent.classList.remove("blur-sm")
      }
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${videoId}?autoPlay=1`}
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}

