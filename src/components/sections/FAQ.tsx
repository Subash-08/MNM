import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/src/constants";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Objection Handling</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand you have questions. We've answered the most common ones here to help you make an informed decision.
            </p>
            <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
              <h4 className="font-bold mb-2">Still have doubts?</h4>
              <p className="text-sm text-muted-foreground mb-4">Our founder is available for a direct call to discuss the business model.</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                Schedule a Call
              </Button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="border border-border rounded-2xl px-6 bg-white overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold py-6 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <Button variant="link" className="text-primary font-bold">
                View All 15 FAQs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
