
'use client'
import './globals.css';
import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import React, { useEffect, useState, useContext } from 'react';
import { fetchData, API_URL, HOST } from '../api/api.js';
import Image from "next/image";
import Header from '@/components/page/header.tsx';


const inter = Montserrat({ subsets: ["latin"]});


// Client-side footer component
function Footer() {
  'use client';

  return (
    <footer className="bg-primary text-white mt-16">
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
          <p>&copy; 2024 Happy Tails Pet Grooming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Import these after the client components to avoid "use client" directive issues


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary">
          <Header/>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}