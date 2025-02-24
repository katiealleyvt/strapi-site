import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pawfect Grooming & Boarding',
  description: 'Professional dog grooming and boarding services',
};

// Client-side navigation component
function Navigation() {
  'use client';
  
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
          <PawPrint className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Pawfect</span>

              </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-2">Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-2">Services</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-2">FAQ</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-2">Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

// Client-side footer component
function Footer() {
  'use client';

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Pawsome Street</p>
            <p>Dogtown, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p>Monday - Friday: 8am - 6pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">Instagram</a>
              <a href="#" className="hover:text-accent">Facebook</a>
              <a href="#" className="hover:text-accent">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p>&copy; 2024 Pawfect Grooming & Boarding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Import these after the client components to avoid "use client" directive issues
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <Navigation />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}