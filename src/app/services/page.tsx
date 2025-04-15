'use client'

import { ReactNode } from 'react'
import { motion } from 'motion/react'
import { CheckCircle, ChevronDown } from 'lucide-react'

export default function Services() {
  return (
    <section className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 text-5xl font-bold">Our Services</h1>
          <p className="text-lg text-slate-400">
            Lorem ipsum eiusmod laborum consectetur sint dolor amet ad dolore
            deserunt cupidatat cillum.
          </p>
        </motion.div>

        {/* Animated Chevron */}
        <motion.div
          className="absolute bottom-40 lg:bottom-10 text-slate-600"
          animate={{
            y: [0, 10, 0], // Up and down
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      <section className="min-h-[30vh] mx-auto max-w-6xl p-6 text-center">
        <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-md transition hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4">
                {service.icon}
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-slate-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  )
}

type Service = {
  title: string
  description: string
  icon: ReactNode
}

const services: Service[] = [
  {
    title: '3D Animation',
    description:
      "Hoef Entertainment is truly exceptional when it comes to creating breathtaking 3D animations. With an experienced team of highly skilled artists, we consistently push the boundaries of visual storytelling. Our passion and understanding of the principles of animation makes sure we produce breathtaking animations time after time. The mixture of our inhouse artists and trusted freelancers, guarenties an experienced director/producer for every type of project. whether it's videogame character animation or a product marketing video.",
    icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
  },
  {
    title: '3D Modeling',
    description:
      'Hoef Entertainment has an extensive and impressive track record in creating 3D models for a wide range of industries, including films, games, and marketing. With years of experience under our belt, we have established ourself as a trusted and reliable partner for clients seeking high-quality 3D models. Years of experience allowed us to develop a deep understanding of the unique requirements and demands of each industry, enabling us to deliver tailored models that exceed expectations. ',
    icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
  },
  {
    title: 'VFX Solutions',
    description:
      "Hoef Entertainment has a rich history in VFX (visual effects), Creating and implementing VFX solutions for multiple short films. We consistently demonstrate our ability to bring imagination to life with the help of rotoscoping, keying, compositing, and much more. Our VFX supervisors work with a rich combination of inhouse artists and freelancers, making sure we have an expert for every step of the process. Whether it's realistic simulations, explosive action scenes, or fantastical elements, our experience in VFX ensures that each project receives the highest level of quality and creativity. With experience as lead VFX studio, supporting VFX studio and as VFX consultant. we will seamlessly fit your production.",
    icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
  },
]
