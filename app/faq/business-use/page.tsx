import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Building, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Use | AI Response Generator FAQ",
  description: "Learn how businesses can leverage our AI Response Generator for professional communications",
}

export default function BusinessUsePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">Can I use this for business communications?</h2>
          <p className="text-lg mb-4">
            Yes, absolutely! Our AI Response Generator is designed with professional use cases in mind and is an
            excellent tool for various business communications. Many organizations, from startups to enterprises, use
            our tool to enhance their communication efficiency and quality.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Tone</h3>
                <p>
                  Our "Professional" tone option is specifically calibrated for business contexts, ensuring your
                  communications maintain appropriate formality and clarity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Business Templates</h3>
                <p>
                  We offer specialized templates for common business scenarios like client communications, internal
                  memos, meeting follow-ups, and more.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p>
                  Our business plans allow teams to share templates, maintain consistent communication styles, and
                  collaborate on response generation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Adaptability</h3>
                <p>
                  The AI can adapt to various industries and business contexts, from customer service to sales, HR, and
                  executive communications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Business Use Cases</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg">Customer Service</h4>
            <p>
              Generate consistent, helpful responses to customer inquiries, complaints, and support requests. Maintain
              quality while reducing response time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Sales Communications</h4>
            <p>
              Create personalized follow-ups, proposals, and outreach messages that maintain your sales team's voice
              while saving valuable time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Internal Communications</h4>
            <p>
              Draft announcements, meeting summaries, and team updates with appropriate tone and clarity for effective
              internal messaging.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Recruitment and HR</h4>
            <p>
              Generate professional responses to job applicants, interview follow-ups, and employee inquiries with
              consistent messaging.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-2xl font-bold mb-4">Business Success Stories</h3>
        <div className="space-y-6">
          <div className="bg-background p-4 rounded-lg border">
            <p className="italic mb-2">
              "Our customer support team has seen a 40% increase in response efficiency since implementing the AI
              Response Generator. The quality and consistency of our communications have improved significantly."
            </p>
            <p className="text-sm font-medium">- Jennifer L., Customer Experience Director at TechSolutions Inc.</p>
          </div>
          <div className="bg-background p-4 rounded-lg border">
            <p className="italic mb-2">
              "As a small business owner with limited staff, this tool has been invaluable for maintaining professional
              communications with clients and partners without spending hours drafting emails."
            </p>
            <p className="text-sm font-medium">- Marcus R., Founder of Creative Design Studio</p>
          </div>
        </div>
      </div>
    </div>
  )
}
