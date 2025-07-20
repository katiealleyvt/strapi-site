"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLink } from "@/components/page/pagelink";

import Image from "next/image";
import Link from "next/link";
import { fetchData, API_URL, HOST } from '../api/api.js';
import { Page, Services, Hero, PageButton,  Features, Contact, Article } from '../api/interfaces.tsx';
import React, { useEffect, useState } from 'react';
import { parseJSON, setDate } from "date-fns";
import HeroComponent from "@/components/page/hero.tsx";
import ServicesComponent from "@/components/page/services.tsx";
import FeaturesComponent from "@/components/page/features.tsx";
import ContactComponent from "@/components/page/contact.tsx";
import ArticleComponent from "@/components/page/article.tsx";




export default function Home() {

  

  const [homepage, setHomepage] = useState<Page | null>(null);
  const [hero, setHero] = useState<Hero | undefined>(undefined);
  const [features, setFeatures] = useState<Features | undefined>(undefined);
  const [services, setServices] = useState<Services | undefined>(undefined);
  const [contact, setContact] = useState<Contact | undefined>(undefined);
  const [article, setArticle] = useState<Article | undefined>(undefined);


  useEffect(() => {
    const getHomepage = async () => {
      try {
        const result = await fetchData('/home-pages?populate[blocks][populate]=*');
        const homepageData = result.data.find((el: any) => el.pageKey == 'home')
        console.log(result);
        // Set homepage and hero state
        setHomepage(homepageData);
        setHero(homepageData?.blocks[0]);
        setFeatures(homepageData?.blocks[1])
        setServices(homepageData?.blocks[2])
        setContact(homepageData?.blocks[3])
        setArticle(homepageData?.blocks[4])


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getHomepage();
  }, []);

  
console.log(article);

  return (
    <div>
      {/* Hero Section */}
      <HeroComponent hero={hero}/>

      {/* Features Section */}
      <FeaturesComponent features={features}/>

      {/* Services Preview */}
      <ServicesComponent services={services}/>
      
      <ContactComponent contact={contact}/>
      <ArticleComponent article={article}/>
    </div>
  );
}