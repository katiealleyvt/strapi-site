"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Calendar, Heart, Medal, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchData } from '../api/api.js';
import React, { useEffect, useState } from 'react';
import { parseJSON } from "date-fns";

type Button = {
  color: string;
  isExternal: boolean;
  text: string;
  url: string;
};

type Hero = {
  id: number;
  bgImage: string;
  description: string;
  heading: string;
  buttons: Button[];
};

type HomePage = {
  hero: Hero;
};

export default function Home() {

  const [homepage, setHomepage] = useState<HomePage | null>(null);

  useEffect(() => {
    const getHomepage = async () => {
      const result = await fetchData('/home-pages?populate[hero][populate]=*');
      console.log(result);
      setHomepage(result);
    };
    const setHomepage = async (data: object) => {
      const parsedHero = data.data[0].hero[0];
      let page:HomePage = {
        hero: parsedHero
      }
    };
    getHomepage();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
          alt="Happy dog being groomed"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">{homepage?.hero.heading}</h1>
              <p className="text-xl mb-8">Experience top-quality grooming and boarding services in a loving, safe environment.</p>
              <Link href="/contact">
                <Button size="lg" className="mr-4">Book Now</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-black">Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pawfect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Medal className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Expert Groomers</CardTitle>
                <CardDescription>Certified professional groomers with years of experience</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Loving Care</CardTitle>
                <CardDescription>We treat every pet as if they were our own</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Safe Environment</CardTitle>
                <CardDescription>Modern, clean facilities with 24/7 monitoring</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Bath className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Grooming Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> Full Grooming Package</li>
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> Bath & Brush</li>
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> Nail Trimming</li>
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> Teeth Cleaning</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Boarding Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> Luxury Suites</li>
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> Daily Exercise</li>
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> Playtime Sessions</li>
                  <li className="flex items-center"><Star className="w-4 h-4 mr-2" /> 24/7 Care</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}