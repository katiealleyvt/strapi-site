'use client';
import { useEffect, useState } from "react";
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { PageLink } from "./pagelink";
import { HOST } from '@/api/api.js';
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "../ui/card";


interface PhotoboothProps {
  photobooth?: interfaces.Photobooth;
}

export default function PhotoboothComponent({ photobooth }: PhotoboothProps){
                   

console.log(photobooth);
    return(
          <section className={` transition bg-${photobooth?.bgColor} lg:w-2/3 xs:w-full mx-auto`}>
            {photobooth?.header && <h1 className={`text-2xl text-${photobooth?.headerColor}`}>{photobooth?.header}</h1>}

          <ScrollArea className="w-full rounded-md border whitespace-nowrap">
            <div className="flex space-x-4 p-4">
            {photobooth?.images.map((image, index) => (
                <Card className={"w-[350px]"}>
                        <Image src={image.url} alt={image.name} width="533" height="300" className="aspect-[4/3] h-fit object-cover"/>
                        </Card>
            ))}
            </div>
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
          </section>
    );
}
