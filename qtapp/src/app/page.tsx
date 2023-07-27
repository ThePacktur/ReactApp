'use Client'

//import Image from 'next/image'

import { BrowserRouter } from "react-router-dom";
import { Header } from "./layout/Header";
import { AppRouter } from "./router/AppRouter";
import { Footer } from "./layout/Footer";




export default function Home() {
  return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
  )
}
