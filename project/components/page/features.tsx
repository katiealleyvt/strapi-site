'use client';
import { useEffect, useState } from "react";
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { PageLink } from "./pagelink";
import { Bath, Calendar, Heart, Medal, Shield, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


interface FeaturesProps {
  features?: interfaces.Features;
}

export default function Features({ features }: FeaturesProps){


    return(
          <section className={`py-16 bg-${features?.bgColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 text-${features?.textColor}`}>{features?.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.Cards.map((card, index) => (
         <Card key={card.id} color={card.bgColor || "white"}>
         <CardHeader>
          {card.svg == "medal" && <Medal className={`w-12 h-12 mb-4 text-${features?.textColor}`}/>}
          {card.svg == "heart" && <Heart className={`w-12 h-12 mb-4 text-${features?.textColor}`} />}
          {card.svg == "shield" && <Shield className={`w-12 h-12 mb-4 text-${features?.textColor}`} />}

           <CardTitle color={card.textColor || "black"}>{card.title}</CardTitle>
           <CardDescription color={card.textColor || "black"}>{card.description}</CardDescription>
         </CardHeader>
       </Card>
          ))}
           
          
          </div>
        </div>
      </section>
    );
}
