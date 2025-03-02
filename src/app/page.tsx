"use client";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState, useRef  } from 'react';
import { motion } from 'framer-motion';
import MainPage from './pages/MainPage';
import dynamic from 'next/dynamic';

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    
        <MainPage/>           
      </motion.div>

      
    </>
  );
}


{/*    <div className={`hamburger type1 md:block lg:hidden focus:outline-none  ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="menu_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>*/}