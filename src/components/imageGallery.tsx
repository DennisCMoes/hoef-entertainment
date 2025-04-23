'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type Gallery = {
  slug: string
  entry: {
    title: string
    image: string | null
  }
}

type Props = {
  gallery: Gallery[]
}

export default function ImageGallery({ gallery }: Props) {
  return (
    <section id="gallery" className="relative mx-auto w-full max-w-4xl px-6">
      <h2 className="mb-12 text-center text-4xl font-semibold text-white">
        Gallery
      </h2>

      <Carousel plugins={[Autoplay({ delay: 5000 })]}>
        <CarouselPrevious className="cursor-pointer border-0 bg-purple-500 text-white" />

        <CarouselContent>
          {gallery.map((item, index) => (
            <CarouselItem key={index} className="aspect-video">
              <div className="p-1">
                <div className="relative flex aspect-video overflow-hidden rounded-xl bg-white">
                  {/* <div className="h-full w-full p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div> */}
                  <Image
                    src={item.entry.image!}
                    alt={item.entry.title}
                    priority
                    className="object-cover"
                    fill
                  />

                  <div className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-black/80 to-transparent px-4 pt-6 pb-4">
                    <span className="text-xl font-semibold text-white">
                      {item.entry.title}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="cursor-pointer border-0 bg-purple-500 text-white" />
      </Carousel>
    </section>
  )
}
