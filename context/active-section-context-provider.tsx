"use client"
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
import React, { useState, ReactNode, createContext, useContext } from 'react'

type SectionName = typeof navLinks[number]["name"];

type ActiveSectionContextProviderProps = {
  children: ReactNode;
}

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {
  const pathName = usePathname();
  const currentActiveSection = pathName.substring(1) || "home";
  
  const [activeSection, setActiveSection] = useState<SectionName>(currentActiveSection);
  return (
    <ActiveSectionContext.Provider value={{
      activeSection: activeSection,
      setActiveSection: setActiveSection,
    }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context == null) {
        throw new Error(
            "UseActiveSectionContext must be used within its provider."
        );
    }

    return context;
}

export default ActiveSectionContextProvider