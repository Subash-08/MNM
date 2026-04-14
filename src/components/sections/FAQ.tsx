import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FAQ() {
  return (
    <section id="faq" className=" bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column - Header & CTA */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center">
                <div className="w-6 h-[2px] bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-800 -ml-1"></div>
              </div>
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">FAQ</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-12"
            >
              We understand you have questions. We've answered the most common ones here to help you make an informed decision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#f8f9fa] p-8 rounded-3xl border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#ffe600] rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Still have doubts?</h3>
              <p className="text-gray-600 mb-8">Our founder is available for a direct call to discuss the business model in detail.</p>
              <Button className="w-full bg-[#1a1a1a] hover:bg-gray-800 text-white rounded-full py-6 font-medium transition-colors">
                Schedule a Call
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:w-2/3 w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-gray-200 rounded-2xl px-6 md:px-8 bg-white data-[state=open]:border-[#ffe600] data-[state=open]:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg md:text-xl py-6 hover:no-underline text-[#1a1a1a]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base md:text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 text-center"
            >
              <Button variant="link" className="text-[#1a1a1a] font-bold text-lg hover:text-amber-600 transition-colors">
                View All 15 FAQs
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
