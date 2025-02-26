"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLink } from "@/components/page/pagelink";
import { Bath, Calendar, Heart, Medal, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchData, API_URL, HOST } from '../api/api.js';
import { HomePage, Hero, PageButton, DataResponse, Meta } from '../api/components.tsx';
import React, { useEffect, useState } from 'react';
import { parseJSON, setDate } from "date-fns";


export default function Home() {

  const [homepage, setHomepage] = useState<HomePage | null>(null);
  const [hero, setHero] = useState<Hero | undefined>(undefined);


  useEffect(() => {
    const getHomepage = async () => {
      try {
        const result = await fetchData('/home-pages?populate[hero][populate]=*');
        const homepageData = result.data[0];

        // Set homepage and hero state
        setHomepage(homepageData);
        setHero(homepageData?.hero[0]);

        console.log('Hero:', homepageData?.hero[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getHomepage();
  }, []);

  const bgImage = `${HOST}${hero?.bgImage?.url}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        {hero?.bgImage?.url && <Image
          //src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
          src={bgImage}
          alt="Happy dog being groomed"
          fill
          className="object-cover"
          priority
        />}
        
        <div className="absolute inset-0 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center text-white">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">{hero?.heading}</h1>
              <p className="text-xl mb-8">{hero?.description}</p>
              {hero?.buttons?.[0] && <PageLink {...hero.buttons[0]} />}
              {hero?.buttons?.[1] && <PageLink {...hero.buttons[1]} />}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary">
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