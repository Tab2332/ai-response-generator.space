import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Infinity, Clock, Zap, CreditCard } from "lucide-react"

export const metadata: Metadata = {
  title: "Usage Limits | AI Response Generator FAQ",
  description: "Learn about usage limits and plans for our AI Response Generator",
}

export default function UsageLimitsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">Is there a limit to how many responses I can generate?</h2>
          <p className="text-lg mb-4">
            We offer flexible plans to accommodate different usage needs, from casual users to high-volume business
            users. Our goal is to provide you with the right amount of access at a fair price point.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Infinity className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
                <p>
                  Our free plan allows you to generate up to 25 responses per day, which is perfect for individual users
                  with occasional needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Standard Plan</h3>
                <p>
                  Our standard plan increases your limit to 100 responses per day, suitable for professionals who rely
                  on regular communication.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
                <p>
                  The premium plan offers 500 responses per day, designed for small teams and businesses with higher
                  volume needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
                <p>
                  Our enterprise plan provides unlimited responses and additional features for large organizations with
                  extensive communication needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Plan Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4">Feature</th>
                <th className="text-center py-2 px-4">Free</th>
                <th className="text-center py-2 px-4">Standard</th>
                <th className="text-center py-2 px-4">Premium</th>
                <th className="text-center py-2 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Daily Responses</td>
                <td className="text-center py-2 px-4">25</td>
                <td className="text-center py-2 px-4">100</td>
                <td className="text-center py-2 px-4">500</td>
                <td className="text-center py-2 px-4">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Response Length</td>
                <td className="text-center py-2 px-4">Up to 300 words</td>
                <td className="text-center py-2 px-4">Up to 500 words</td>
                <td className="text-center py-2 px-4">Up to 1000 words</td>
                <td className="text-center py-2 px-4">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Template Access</td>
                <td className="text-center py-2 px-4">Basic</td>
                <td className="text-center py-2 px-4">All Templates</td>
                <td className="text-center py-2 px-4">All + Custom</td>
                <td className="text-center py-2 px-4">All + Custom</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Team Members</td>
                <td className="text-center py-2 px-4">1</td>
                <td className="text-center py-2 px-4">1</td>
                <td className="text-center py-2 px-4">Up to 5</td>
                <td className="text-center py-2 px-4">Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-2xl font-bold mb-4">Flexible Usage</h3>
        <p className="mb-4">
          We understand that communication needs can vary greatly from day to day. That's why our plans are designed
          with flexibility in mind. If you occasionally need more responses than your plan allows, you can purchase
          additional response packs without upgrading your entire plan.
        </p>
        <p className="italic text-muted-foreground">
          "The flexible usage options have been perfect for our agency. During busy client periods, we can easily scale
          up our usage, and during quieter times, we stick with our standard plan." - David K., Marketing Agency
          Director
        </p>
      </div>
    </div>
  )
}
