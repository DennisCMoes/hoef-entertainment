import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="text-foreground flex w-4xl flex-col gap-4">
      <h1>Services</h1>
      <div className="grid grid-cols-3 gap-4">
        {PROJECTS.map((item, index) => (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {item.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const SERVICES = []

const PROJECTS: { title: string; content: string }[] = [
  {
    title: 'Lorem ipsum occaecat',
    content: 'Lorem ipsum aute laborum, elit laboris, commodo eiusmod, aliqua cupidatat incididunt aute. Cillum enim cupidatat, ut, est reprehenderit aliqua tempor in nostrud amet.'
  },
  {
    title: 'Lorem ipsum occaecat',
    content: 'Lorem ipsum aute laborum, elit laboris, commodo eiusmod, aliqua cupidatat incididunt aute. Cillum enim cupidatat, ut, est reprehenderit aliqua tempor in nostrud amet.'
  },
  {
    title: 'Lorem ipsum occaecat',
    content: 'Lorem ipsum aute laborum, elit laboris, commodo eiusmod, aliqua cupidatat incididunt aute. Cillum enim cupidatat, ut, est reprehenderit aliqua tempor in nostrud amet.'
  },
  {
    title: 'Lorem ipsum occaecat',
    content: 'Lorem ipsum aute laborum, elit laboris, commodo eiusmod, aliqua cupidatat incididunt aute. Cillum enim cupidatat, ut, est reprehenderit aliqua tempor in nostrud amet.'
  },
  {
    title: 'Lorem ipsum occaecat',
    content: 'Lorem ipsum aute laborum, elit laboris, commodo eiusmod, aliqua cupidatat incididunt aute. Cillum enim cupidatat, ut, est reprehenderit aliqua tempor in nostrud amet.'
  },
]
