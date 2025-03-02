'use client';
import * as interfaces from "@/api/interfaces";
import { Link } from "lucide-react";
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
          const result = await fetchData('/headers/hbz5cg1g5ij7nje8yz0m1a5m?populate=*');
          const headerData = result.data;
          // Set homepage and hero state
          setHeader(headerData);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      getHeader();
    }, []);
  
    
    console.log(header)
    const logoImage = `${HOST}${header?.logo?.url}`;

    return(
    <Navigation />
    );
}


// Client-side navigation component
const Navigation: React.FC<NavigationProps> = ({ header }) => {
  'use client';
  
  
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
          {header?.logo?.url && <Image
                    //src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                    src={header?.logo?.url}
                    alt="Happy dog being groomed"
                    fill
                    className="object-cover"
                    priority
                  />}
              </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className="px-3 py-2">Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services">
                <NavigationMenuLink className="px-3 py-2">Services</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq">
                <NavigationMenuLink className="px-3 py-2">FAQ</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink className="px-3 py-2">Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}