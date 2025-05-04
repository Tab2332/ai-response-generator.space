import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Security | AI Response Generator FAQ",
  description: "Learn about our data security practices and how we protect your information",
}

export default function DataSecurityPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">Is my data secure when using this tool?</h2>
          <p className="text-lg mb-4">
            Yes, we take data security extremely seriously. Your privacy and the protection of your information are top
            priorities for us. Here's how we ensure your data remains secure:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">No Permanent Storage</h3>
                <p>
                  Your inputs are not stored permanently on our servers. They are only used temporarily to generate your
                  response and are automatically deleted afterward.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Encrypted Transmission</h3>
                <p>
                  All data transmitted between your browser and our servers is encrypted using industry-standard SSL/TLS
                  protocols, ensuring that your information cannot be intercepted.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">No Third-Party Sharing</h3>
                <p>
                  We do not share your data with third parties or use it for training our models without your explicit
                  consent. Your information remains private and confidential.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p>
                  Our data handling practices comply with global privacy regulations including GDPR and CCPA, ensuring
                  that your data is handled responsibly and legally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Local Processing Options</h3>
        <p className="mb-4">
          For users with heightened privacy concerns, we offer options for local processing where possible, reducing the
          amount of data that needs to be sent to our servers. This provides an additional layer of privacy while still
          allowing you to benefit from our AI capabilities.
        </p>
        <p>
          Our team regularly conducts security audits and updates our practices to ensure we're using the most current
          and effective security measures to protect your data.
        </p>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-2xl font-bold mb-4">Your Control Over Your Data</h3>
        <p className="mb-4">
          We believe in giving you control over your data. You can request the deletion of any stored information at any
          time through your account settings or by contacting our support team.
        </p>
        <p className="italic text-muted-foreground">
          "In today's digital landscape, data security is paramount. We've designed our AI Response Generator with
          privacy-first principles to ensure your sensitive communications remain confidential and secure." - Michael
          Chen, Chief Security Officer
        </p>
      </div>
    </div>
  )
}
