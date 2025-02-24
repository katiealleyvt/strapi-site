import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h1>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does a grooming session take?</AccordionTrigger>
          <AccordionContent>
            The duration of a grooming session varies depending on the size of your dog, coat condition, and selected services. 
            On average, a full grooming session takes 2-4 hours. We'll provide a more accurate estimate when you book your appointment.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What vaccinations are required for boarding?</AccordionTrigger>
          <AccordionContent>
            For the safety of all our guests, we require proof of current vaccinations for:
            <ul className="list-disc ml-6 mt-2">
              <li>Rabies</li>
              <li>DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus)</li>
              <li>Bordetella (within last 6 months)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What should I bring for my dog's boarding stay?</AccordionTrigger>
          <AccordionContent>
            We recommend bringing:
            <ul className="list-disc ml-6 mt-2">
              <li>Your dog's regular food</li>
              <li>Any medications they need</li>
              <li>A favorite toy or blanket (optional)</li>
              <li>Vaccination records</li>
            </ul>
            We provide comfortable bedding, bowls, and everything else your pet needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Do you offer pick-up and drop-off services?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer transportation services within a 10-mile radius of our location for an additional fee. 
            Please contact us for rates and availability.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
          <AccordionContent>
            For grooming appointments, we require 24 hours notice for cancellations. For boarding reservations, 
            we require 48 hours notice. Cancellations made after these times may be subject to a cancellation fee.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>How often should I have my dog groomed?</AccordionTrigger>
          <AccordionContent>
            The frequency of grooming depends on your dog's breed, coat type, and lifestyle. Generally, we recommend:
            <ul className="list-disc ml-6 mt-2">
              <li>Short-haired breeds: Every 8-12 weeks</li>
              <li>Medium-haired breeds: Every 6-8 weeks</li>
              <li>Long-haired breeds: Every 4-6 weeks</li>
            </ul>
            We can provide a personalized recommendation during your first visit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}