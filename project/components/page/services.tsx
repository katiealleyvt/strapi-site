'use client';
import { useEffect, useState } from "react";
import * as interfaces from "@/api/interfaces";
import { fetchData } from '@/api/api.js';
import Image from "next/image";
import { PageLink } from "./pagelink";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Calendar, Heart, Medal, Shield, Star } from "lucide-react";
import Markdown from 'react-markdown'

interface ServicesProps {
  services?: interfaces.Services;
}

export default function Services({ services }: ServicesProps){
  const servicesSection = `py-16 bg-${services?.bgColor}}`;
    const servicesText = `text-3xl font-bold text-center mb-12 ${services?.textColor}`;
    return(
          <section className={servicesSection}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={servicesText}>{services?.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services?.services.map((service, index) => (
            
            <Card key={service.id} color={service.bgColor || "black"}>
            <CardHeader>
              <Bath className="w-12 h-12 text-secondary mb-4" />
              <CardTitle color={service.textColor || "white"}>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="list-style-star" color={service.textColor || "white"}>
              <Markdown>{service.description}</Markdown>
            </CardContent>
          </Card>
          ))}
          </div>
        </div>
      </section>
    );
}
