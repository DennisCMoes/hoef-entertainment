'use client'

import Image from 'next/image'

export default function MasonryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Our Work
      </h2>

      <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={800}
              className="h-auto w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

type Image = {
  src: string
  alt: string
}

const images: Image[] = [
  { src: '/visuals/001.png', alt: 'Image 1' },
  { src: '/visuals/003.png', alt: 'Image 3' },
  { src: '/visuals/004.png', alt: 'Image 4' },
  { src: '/visuals/005.png', alt: 'Image 5' },
  { src: '/visuals/006.png', alt: 'Image 6' },
  { src: '/visuals/008.png', alt: 'Image 8' },
  { src: '/visuals/011.png', alt: 'Image 11' },
  { src: '/visuals/013.png', alt: 'Image 13' },
  { src: '/visuals/014.png', alt: 'Image 14' },
]
