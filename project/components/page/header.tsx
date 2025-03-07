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
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <a href="/">
          {header?.logo?.url && <Image
                    //src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                    src={logoImage}
                    alt="Logo"
                    width="30"
                    style={{width:"100%", height:"30px"}}
                    height="30"
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