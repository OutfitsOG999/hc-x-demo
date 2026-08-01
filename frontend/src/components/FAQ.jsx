import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";

export default function FAQ() {
  return (
    <section id="faq" data-testid="faq-section" className="py-28 lg:py-40 bg-matte relative grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Questions, Answered</Eyebrow>
              <h2 className="font-serif tracking-tight text-4xl md:text-5xl text-charcoal leading-tight mb-6">
                Everything you'd
                <br />
                <span className="italic text-champagne-dark">like to know.</span>
              </h2>
              <p className="text-charcoal-soft font-light leading-relaxed max-w-sm">
                Can't find your answer? Send us a message — we reply personally,
                usually within one working day.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-beige-dark/50">
                  <AccordionTrigger
                    data-testid={`faq-question-${i}`}
                    className="font-serif text-lg md:text-xl text-charcoal text-left tracking-tight hover:text-champagne-dark hover:no-underline py-7 transition-colors duration-300"
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent
                    data-testid={`faq-answer-${i}`}
                    className="text-charcoal-soft font-light leading-relaxed pb-7 max-w-xl"
                  >
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
