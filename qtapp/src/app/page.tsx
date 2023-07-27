//import Image from 'next/image'

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AppRouter } from "./router/AppRouter";

export default function Home() {
  return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
  )
}
