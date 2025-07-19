"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLink } from "@/components/page/pagelink";

import Image from "next/image";
import Link from "next/link";
import { fetchData, API_URL, HOST } from '../api/api.js';
import { HomePage, Services, Hero, PageButton,  Features, Contact } from '../api/interfaces.tsx';
import React, { useEffect, useState } from 'react';
import { parseJSON, setDate } from "date-fns";
import HeroComponent from "@/components/page/hero.tsx";
import ServicesComponent from "@/components/page/services.tsx";
import FeaturesComponent from "@/components/page/features.tsx";
import ContactComponent from "@/components/page/contact.tsx";




export default function Home() {

  

  const [homepage, setHomepage] = useState<HomePage | null>(null);
  const [hero, setHero] = useState<Hero | undefined>(undefined);
  const [features, setFeatures] = useState<Features | undefined>(undefined);
  const [services, setServices] = useState<Services | undefined>(undefined);
  const [contact, setContact] = useState<Contact | undefined>(undefined);


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
        setContact(homepageData?.blocks[3])


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getHomepage();
  }, []);

  


  return (
    <div>
      {/* Hero Section */}
      <HeroComponent hero={hero}/>

      {/* Features Section */}
      <FeaturesComponent features={features}/>

      {/* Services Preview */}
      <ServicesComponent services={services}/>
      
      <ContactComponent contact={contact}/>
    </div>
  );
}