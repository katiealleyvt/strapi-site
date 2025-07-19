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
          <section className={`py-16 pb-32`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {article?.image?.url &&
            <div>
               <Image src={article?.image?.url} alt={article?.image?.name}></Image>
            </div>
            }
            <div>
              <h2>{article?.header}</h2>
              <p>{article?.headerColor}</p>
              <a href="">READ MORE</a>
            </div>
          </div>
          </section>
    );
}
