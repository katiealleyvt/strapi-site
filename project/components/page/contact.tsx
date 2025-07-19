'use client';
import { useEffect, useState } from "react";
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { PageLink } from "./pagelink";
import { HOST } from '@/api/api.js';
import { cn } from "@/lib/utils";


interface ContactProps {
  contact?: interfaces.Contact;
}

export default function ContactComponent({ contact }: ContactProps){

    return(
          <section className={`-translate-y-24 h-48 lg:w-3/5 xs:w-full flex justify-center mx-auto p-3 rounded-lg shadow-sm hover:shadow-xl transition bg-${contact?.bgColor}`}>
            <div className={`text-${contact?.textColor} flex justify-between w-full mx-8 h-full place-items-center gap-4`}>
                
                    <p className='text-2xl font-bold w-1/2 leading-8'>{contact?.header}</p>

                    <a href={contact?.buttonLink} className={`bg-${contact?.buttonColor} text-${contact?.buttonTextColor} text-2xl p-6 font-bold text-center hover:scale-[1.02] transition`}>{contact?.buttonText.toUpperCase()}</a>
            </div>
          </section>
    );
}
