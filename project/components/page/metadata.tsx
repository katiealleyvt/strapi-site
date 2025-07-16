import React, { createContext, useContext, useState } from 'react';
import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'Happy Tails Pet Grooming',
  description: 'Default Description',
  keywords: [],
};

const MetadataContext = createContext<{
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}>({
  title: '',
  setTitle: () => {},
});

export const MetadataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState<string>('Title');

  return (
    <MetadataContext.Provider value={{ title, setTitle }}>
      {children}
    </MetadataContext.Provider>
  );
};
