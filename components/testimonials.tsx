import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      avatar: "/serene-gaze.png",
      content:
        "This AI Response Generator has saved me hours of time crafting emails. The responses are professional and perfectly tailored to my needs.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Customer Support Lead",
      avatar: "/thoughtful-gaze.png",
      content:
        "Our support team uses this tool daily. It helps us maintain a consistent tone while personalizing responses to each customer.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Writer",
      avatar: "/serene-gaze.png",
      content:
        "As someone who writes dozens of emails daily, this tool has been a game-changer for my productivity and communication quality.",
      rating: 4,
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Thousands of professionals trust our AI Response Generator to improve their communication
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
