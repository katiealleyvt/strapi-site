'use client';
import * as interfaces from "@/api/interfaces";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { useEffect, useState } from "react";
import { fetchData, HOST } from "@/api/api";


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
  
  const logoImage = `${HOST}${header?.logo?.url}`;
  console.log(logoImage);
  return (
    <nav className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <a href="/">
          {header?.logo?.url && <Image
                    src={logoImage}
                    alt="Logo"
                    width="200"
                    height="200"
                  />}
                  </a>
          {header?.navigation && 
          <NavigationMenu>
          <NavigationMenuList>
          {header?.navigation.menuItems.map((page, index) => (
            <NavigationMenuItem key={page.id}>
              <a href={page.url}>
                <NavigationMenuLink className="px-3 py-2">{page.title}</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          ))}
          </NavigationMenuList>
        </NavigationMenu>
        }
      </div>
    </nav>
  );
}