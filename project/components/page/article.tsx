'use client';
import { useEffect, useState } from "react";
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { PageLink } from "./pagelink";
import { HOST } from '@/api/api.js';
import { cn } from "@/lib/utils";


interface ArticleProps {
  article?: interfaces.Article;
}

export default function ArticleComponent({ article }: ArticleProps){

    return(
          <section className={`py-16 pb-32 bg-${article?.bgColor}`}>
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex`}>
            <div className="w-1/2">
            {article?.image?.url && <Image
                                src={article?.image?.url}
                                alt={article?.image?.name}
                                width="500"
                                height="300"
                                className="rounded-lg"
                              />}
            </div>
            <div className="w-1/2 h-full place-items-center">
              <h2 className={`text-${article?.headerColor} text-3xl font-bold text-left my-6`}>{article?.header}</h2>
              <p className={`text-${article?.textColor} mb-8 text-xl leading-8`}>{article?.description}</p>
              <a href={article?.buttonLink} className={`text-${article?.buttonTextColor} bg-${article?.buttonColor} text-lg p-3 font-bold text-center`}>{article?.buttonText}</a>
            </div>
          </div>
          </section>
    );
}
