import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Bed, Nut as Cut, Heart, Scissors, ShowerHead } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
      
      {/* Grooming Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Grooming Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Bath className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Basic Bath Package</CardTitle>
              <CardDescription>Starting at $40</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Shampoo & Conditioning</li>
                <li>Blow Dry</li>
                <li>Brush Out</li>
                <li>Nail Trimming</li>
                <li>Ear Cleaning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Scissors className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Full Grooming Package</CardTitle>
              <CardDescription>Starting at $65</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>All Basic Bath Services</li>
                <li>Custom Haircut</li>
                <li>Style & Finishing</li>
                <li>Paw Pad Trimming</li>
                <li>Sanitary Trim</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Spa Package</CardTitle>
              <CardDescription>Starting at $85</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>All Full Grooming Services</li>
                <li>Premium Shampoo</li>
                <li>Deep Conditioning</li>
                <li>Teeth Brushing</li>
                <li>Pawdicure</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Boarding Services */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Boarding Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Bed className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Standard Suite</CardTitle>
              <CardDescription>Starting at $35/night</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Comfortable Bedding</li>
                <li>3 Daily Walks</li>
                <li>Regular Feeding</li>
                <li>Basic Monitoring</li>
                <li>Climate Control</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShowerHead className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Deluxe Suite</CardTitle>
              <CardDescription>Starting at $50/night</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Premium Bedding</li>
                <li>4 Daily Walks</li>
                <li>Premium Food Option</li>
                <li>Playtime Sessions</li>
                <li>Webcam Monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cut className="w-12 h-12 text-primary mb-4" />
              <CardTitle>VIP Suite</CardTitle>
              <CardDescription>Starting at $75/night</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Luxury Suite</li>
                <li>5 Daily Walks</li>
                <li>Gourmet Meals</li>
                <li>One-on-One Play</li>
                <li>Daily Updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}