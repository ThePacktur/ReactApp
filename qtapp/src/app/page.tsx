'use client'

import Footer from "@/pages/layout/Footer";
import { Header } from "@/pages/layout/Header";
import { AppRouter } from "@/pages/router/AppRouter";
import Image from 'next/image'

import { BrowserRouter } from "react-router-dom";





export default function Home() {
  return (
    
    <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
  )
}
