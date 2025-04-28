'use client'

import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconX, IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

export default function MasonryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<number>(0)

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setDirection(1)
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }, [selectedIndex])

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setDirection(-1)
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }, [selectedIndex])

  const openLightbox = (index: number) => {
    setDirection(0)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev, selectedIndex])

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-8 text-center text-3xl font-bold text-white"
      >
        Our Work
      </motion.h2>

      {/* Masonry Grid */}
      <motion.div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            className="cursor-pointer break-inside-avoid overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={800}
              className="h-auto w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative flex max-h-[90vh] w-full max-w-6xl items-center justify-center overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={selectedIndex}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({
                        x: dir > 0 ? 300 : -300,
                        opacity: 0,
                      }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({
                        x: dir > 0 ? -300 : 300,
                        opacity: 0,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset }) => {
                      const swipe = Math.abs(offset.x) > 100

                      if (swipe) {
                        if (offset.x < 0) {
                          handleNext()
                        } else {
                          handlePrev()
                        }
                      }
                    }}
                    className="relative flex h-auto max-h-[90vh] w-full items-center justify-center"
                  >
                    <Image
                      src={images[selectedIndex].src}
                      alt={images[selectedIndex].alt}
                      width={1200}
                      height={800}
                      className="pointer-events-none max-h-[90vh] rounded-lg object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 cursor-pointer text-white transition hover:text-purple-400"
                onClick={closeLightbox}
              >
                <IconX />
              </button>

              {/* Previous Button */}
              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-white transition hover:text-purple-400"
                onClick={handlePrev}
              >
                <IconArrowLeft />
              </button>

              {/* Next Button */}
              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-white transition hover:text-purple-400"
                onClick={handleNext}
              >
                <IconArrowRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
