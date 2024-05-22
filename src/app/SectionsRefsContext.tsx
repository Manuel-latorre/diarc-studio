"use client"



import React, { createContext, useContext, useRef, ReactNode } from 'react';

interface SectionRefsContextType {
  current: {
    [key: string]: HTMLElement | null;
  };
}

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export const SectionRefsProvider = ({ children }: { children: ReactNode }) => {
  const sectionRefs = useRef<SectionRefsContextType['current']>({
    solutions: null,
    portfolio: null,
    aboutus: null,
    contact: null,
  });

  return (
    <SectionRefsContext.Provider value={sectionRefs}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
};
