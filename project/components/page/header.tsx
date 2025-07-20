'use client';
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { useEffect, useState } from "react";
import { fetchData, HOST } from "@/api/api";
import { cn } from '@/lib/utils';


interface NavigationProps {
  header?: interfaces.Header; // Make header optional
  
}

export default function Header({
  
}: {
  
}) {

  const [header, setHeader] = useState<interfaces.Header | undefined>(undefined);
  
  
    useEffect(() => {
      const getHeader = async () => {
        try {
          const result = await fetchData('/headers?populate[navigation][populate]=*&populate[logo][populate]=*');
          const headerData = result.data[0];
          // Set homepage and hero state
          setHeader(headerData);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      getHeader();
    }, []);
  
    
    console.log(header)

    return(
    <Navigation header={header}/>
    );
}


// Client-side navigation component
const Navigation: React.FC<NavigationProps> = ({ header }) => {
  'use client';
  return (
    <nav className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <a href="/">
          {header?.logo?.url && <Image
                    src={header?.logo?.url}
                    alt="Logo"
                    width="250"
                    height="100"
                  />}
                  </a>
          {header?.navigation && 
          <NavigationMenu>
          <NavigationMenuList className="gap-4">
          {header?.navigation.menuItems.map((page, index) => (
            <NavigationMenuItem key={page.id} className={`group/item`}>
                <NavigationMenuLink href={page.url} className={` py-2 text-xl group-hover/item:text-stone-300 rounded-md transition text-center text-${header?.navigation.textColor}`}>
                {page.title}
                <div className={`transition-all bg-stone-300 w-0 group-hover/item:w-full h-[2px]`}></div>
                </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          </NavigationMenuList>
        </NavigationMenu>
        }
      </div>
    </nav>
  );
}