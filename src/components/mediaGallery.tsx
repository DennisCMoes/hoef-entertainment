import Image from 'next/image'
import React from 'react'

type Props = {
  paths: string[]
}

const isVideo = (path: string) => {
  return /\.(mp4|webm|ogg)$/i.test(path)
}

const isImage = (path: string) => {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(path)
}

export default function MediaGallery({ paths }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
      {paths.map((path, index) => {
        if (isVideo(path)) {
          return (
            <div key={index} className="relative">
              <video controls className="w-full rounded-xl shadow">
                <source src={path} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )
        }

        if (isImage(path)) {
          return (
            <div key={index} className="relative">
              <Image
                src={path}
                alt={`Media ${index}`}
                width={200}
                height={200}
              />
            </div>
          )
        }

        return (
          <div key={index} className="text-red-500">
            Unsupported file type: {path}
          </div>
        )
      })}
    </div>
  )
}
