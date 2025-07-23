"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLink } from "@/components/page/pagelink";

import Image from "next/image";
import Link from "next/link";
import { fetchData, API_URL, HOST } from '../../api/api.js';
import { Page, Services, Hero, PageButton,  Features, Contact, Article, Photobooth } from '../../api/interfaces.tsx';
import React, { useEffect, useState } from 'react';
import { parseJSON, setDate } from "date-fns";
import HeroComponent from "@/components/page/hero.tsx";
import ServicesComponent from "@/components/page/services.tsx";
import FeaturesComponent from "@/components/page/features.tsx";
import ContactComponent from "@/components/page/contact.tsx";
import ArticleComponent from "@/components/page/article.tsx";
import PhotoboothComponent from "@/components/page/photobooth.tsx";




export default function About() {

  

  const [page, setPage] = useState<Page | null>(null);


  useEffect(() => {
    const getPage = async () => {
      try {
        const result = await fetchData('/home-pages?populate[blocks][populate]=*');
        const pageData = result.data.find((el: any) => el.pageKey == 'about');
        console.log(result);
        setPage(pageData);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getPage();
  }, []);

  

  return (
    <div>
        {page?.blocks.map((block, index) => {
            if(block.__component === 'blocks.article'){
                return <ArticleComponent key={index} article={block as Article} />;
            }
            if(block.__component === 'blocks.photobooth'){
                return <PhotoboothComponent key={index} photobooth={block as Photobooth} />;
            }
            return null;
        })}
    </div>
  );
}