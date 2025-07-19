'use client';
import { useEffect, useState } from "react";
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { PageLink } from "./pagelink";
import { HOST } from '@/api/api.js';


interface HeroProps {
  hero?: interfaces.Hero;
}

export default function Hero({ hero }: HeroProps){

    return(
          <section className="relative h-[600px]">
            {hero?.bgImage?.url && <Image
              src={hero?.bgImage?.url}
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
                  {hero?.buttons?.[0] && <PageLink {...hero?.buttons[0]} />}
                  {hero?.buttons?.[1] && <PageLink {...hero?.buttons[1]} />}
                </div>
              </div>
            </div>
          </section>
    );
}
