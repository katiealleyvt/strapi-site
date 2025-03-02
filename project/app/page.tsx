"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLink } from "@/components/page/pagelink";

import { Bath, Calendar, Heart, Medal, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchData, API_URL, HOST } from '../api/api.js';
import { HomePage, Services, Hero, PageButton, DataResponse, Meta, Features } from '../api/interfaces.tsx';
import React, { useEffect, useState } from 'react';
import { parseJSON, setDate } from "date-fns";
import Markdown from 'react-markdown'



export default function Home() {

  const [homepage, setHomepage] = useState<HomePage | null>(null);
  const [hero, setHero] = useState<Hero | undefined>(undefined);
  const [features, setFeatures] = useState<Features | undefined>(undefined);
  const [services, setServices] = useState<Services | undefined>(undefined);


  useEffect(() => {
    const getHomepage = async () => {
      try {
        const result = await fetchData('/home-pages?populate[blocks][populate]=*');
        const homepageData = result.data[0];
        console.log(result);
        // Set homepage and hero state
        setHomepage(homepageData);
        setHero(homepageData?.blocks[0]);
        setFeatures(homepageData?.blocks[1])
        setServices(homepageData?.blocks[2])

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getHomepage();
  }, []);

  
  //console.log(services)
  const bgImage = `${HOST}${hero?.bgImage?.url}`;

  const featuresSection = `py-16 bg-${features?.bgColor}`;
  const featuresText = `text-3xl font-bold text-center mb-12 text-${features?.textColor}`
  const featuresSvg = `w-12 h-12 text-primary mb-4 text-${features?.bgColor}`
  
  const servicesSection = `py-16 bg-${services?.bgColor}}`;
  const servicesText = `text-3xl font-bold text-center mb-12 ${services?.textColor}`;
  

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
      <section className={featuresSection}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={featuresText}>{features?.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.Cards.map((card, index) => (
         <Card key={card.id} color={card.bgColor || "white"}>
         <CardHeader>
          {card.svg == "medal" && <Medal className={featuresSvg}/>}
          {card.svg == "heart" && <Heart className={featuresSvg} />}
          {card.svg == "shield" && <Shield className={featuresSvg} />}

           <CardTitle color={card.textColor || "black"}>{card.title}</CardTitle>
           <CardDescription color={card.textColor || "black"}>{card.description}</CardDescription>
         </CardHeader>
       </Card>
          ))}
           
          
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={servicesSection}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={servicesText}>{services?.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services?.services.map((service, index) => (
            
            <Card key={service.id}>
            <CardHeader>
              <Bath className="w-12 h-12 text-primary mb-4" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="list-style-star">
              <Markdown>{service.description}</Markdown>
            </CardContent>
          </Card>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}