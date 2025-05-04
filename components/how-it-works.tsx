export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Enter Your Text",
      description: "Type or paste the text you need to respond to in our AI response generator input field.",
    },
    {
      number: "02",
      title: "Customize Your AI Response",
      description: "Select your preferred tone, length, and other settings in our free AI response generator.",
    },
    {
      number: "03",
      title: "Generate AI Response",
      description: "Click the generate button and watch as our response generator creates your perfect response.",
    },
    {
      number: "04",
      title: "Use Your AI Response",
      description: "Copy the generated AI response with one click and use it wherever you need.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/30 rounded-xl my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Generate perfect responses in just a few simple steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-primary/10 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
