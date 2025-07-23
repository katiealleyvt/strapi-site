'use client';
import { useEffect, useState } from "react";
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { PageLink } from "./pagelink";
import { HOST } from '@/api/api.js';
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";


interface PhotoboothProps {
  photobooth?: interfaces.Photobooth;
}

export default function PhotoboothComponent({ photobooth }: PhotoboothProps){
// shad components
// scrollable
// aspect ratio
// card
    return(
          <section className={`h-48 lg:w-3/5 xs:w-full flex justify-center mx-auto p-3 rounded-lg shadow-sm hover:shadow-xl transition bg-${photobooth?.bgColor}`}>
            {photobooth?.header && <h1 className={`text-2xl text-${photobooth?.headerColor}`}>{photobooth?.header}</h1>}

          <ScrollArea>
            {photobooth?.images.map((image, index) => (
                <Card key={`image-${index}`}>
                    <CardContent>
                        <AspectRatio ratio={16/9}>
                        <Image src={image.url} alt={image.name} />
                        </AspectRatio>
                    </CardContent>
                </Card>
            ))}
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
          </section>
    );
}
