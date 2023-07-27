//import Image from 'next/image'

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../../public/router/AppRouter";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";


export default function Home() {
  return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
  )
}
