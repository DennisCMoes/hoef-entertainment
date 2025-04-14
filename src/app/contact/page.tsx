import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <div className="text-foreground flex w-4xl flex-col gap-4">
      <Card className="bg-shadow text-foreground w-full">
        <CardHeader>
          <CardTitle className="text-4xl">Contact us</CardTitle>
          <CardDescription>
            Don&apos;t hesitate to reach out to use with questions.
            <br />
            Or tell us about your upcoming project
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Name"></Input>
            </div>
            <div className="grid items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="E-mail"></Input>
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject"></Input>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" rows={6} />
          </div>
        </CardContent>
        <CardFooter className='flex justify-end'>
          <Button className='cursor-pointer'>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
