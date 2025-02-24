'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p>123 Pawsome Street</p>
                  <p>Dogtown, ST 12345</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p>info@pawfect.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}