import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function About() {
  return (
    <div className="text-foreground flex w-4xl flex-col gap-4">
      <div>
        <h1 className="text-4xl font-bold">About us</h1>
        <p>
          Lorem ipsum qui quis dolore ut laborum minim magna fugiat consequat
          magna. Ullamco tempor, in id non esse, fugiat irure laboris pariatur
          occaecat. Officia aute culpa aliquip veniam consequat reprehenderit in
          ad, non laboris.
        </p>

        <p>
          Lorem ipsum fugiat, veniam cillum nostrud fugiat magna ullamco duis
          laborum, in aliquip, mollit dolor anim aliquip consectetur laboris.
          Sunt sit magna ut incididunt dolore commodo adipiscing in irure irure
          exercitation occaecat nulla sint laboris quis anim. Deserunt veniam in
          labore, labore et minim nulla aute mollit duis irure, eu veniam
          excepteur mollit, voluptate consequat.
        </p>

        <p>
          Lorem ipsum est ea irure non dolore enim nisi irure eu, magna
          incididunt ut culpa laboris. Enim officia dolore culpa fugiat, cillum,
          enim id consectetur anim, dolor aliqua, nostrud aliquip, nisi.
          Proident tempor sed, ut nulla qui dolore ut voluptate, voluptate, est
          dolor dolore, ea et.
        </p>
      </div>
      <div className="mt-8">
        <Accordion type='single' collapsible className='w-full'>
          {FAQ.map((item, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

const FAQ: { question: string; answer: string }[] = [
  {
    question: 'Lorem ipsum qui minim nisi ex.',
    answer:
      'Lorem ipsum pariatur proident aute est consectetur in consequat elit ut mollit culpa dolor, in. Do voluptate aliquip et laboris sed consectetur culpa velit veniam fugiat dolor labore, quis.',
  },
  {
    question: 'Lorem ipsum qui minim nisi ex.',
    answer:
      'Lorem ipsum pariatur proident aute est consectetur in consequat elit ut mollit culpa dolor, in. Do voluptate aliquip et laboris sed consectetur culpa velit veniam fugiat dolor labore, quis.',
  },
  {
    question: 'Lorem ipsum qui minim nisi ex.',
    answer:
      'Lorem ipsum pariatur proident aute est consectetur in consequat elit ut mollit culpa dolor, in. Do voluptate aliquip et laboris sed consectetur culpa velit veniam fugiat dolor labore, quis.',
  },
  {
    question: 'Lorem ipsum qui minim nisi ex.',
    answer:
      'Lorem ipsum pariatur proident aute est consectetur in consequat elit ut mollit culpa dolor, in. Do voluptate aliquip et laboris sed consectetur culpa velit veniam fugiat dolor labore, quis.',
  },
]
