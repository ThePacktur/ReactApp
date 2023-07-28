'use client'

import Footer from "@/pages/layout/Footer";
import { Header } from "@/pages/layout/Header";
import { AppRouter } from "@/pages/router/AppRouter";
import Image from 'next/image'

import { BrowserRouter } from "react-router-dom";





export default function Home() {
  return (

    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}
<div class="container px-2 ">
  <div class="navbar px-0">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round" height="20" width="20"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="12" x2="21" y2="12">
            </line>
            <line x1="3" y1="6" x2="21" y2="6">
            </line>
            <line x1="3" y1="18" x2="21" y2="18">
            </line>
          </svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content mt-3 p-2 bg-base-200 rounded-md w-52 shadow-lg">
          <li>
            <a href="/">
              Home</a>
          </li><li>
            <a href="/blog">Blog</a>
            </li>
            <li><a href="/about">About</a>
              </li>
              <li><a className="capitalize" href="/category/nextjs">NextJS</a>
              </li>
              <li>
                <a className="capitalize" href="/category/react">React</a>
              </li>
              <li>
                <a className="capitalize" href="/category/graphql">GraphQL</a>
                </li>
                <li>
                  <a classNames="capitalize" href="/category/tailwindcss">TailwindCSS</a>
                  </li>
                  <li>
                    <a classNames="capitalize" href="/category/javascript">Javascript</a>
                    </li>
                    <li>
                      <a className="capitalize" href="/category/daisyui">DaisyUI</a>
                      </li>
                      <li>
                        <a className="capitalize" href="/category/css">CSS</a>
                        </li>
                        <li>
                          <a className="capitalize" href="/category/typescript">Typescript</a>
                          </li>
                          <li>
                            <a className="capitalize" href="/category/node">Node</a>
                            </li>
                            </ul>
                            </div>
                            <a href="/" className="ml-2 text-xl">
                              <h2>
                                <span className="border-b-4 border-indigo-500 font-bold">React</span>
                                <span>Hustle</span>
                                </h2>
                                </a>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                  <ul className="menu menu-horizontal p-0 text-sm">
                                    <li>
                                      <a href="/">Home</a>
                                      </li>
                                      <li>
                                        <a href="/blog">Blog</a>
                                        </li>
                                        <li>
                                          <a href="/about">About</a>
                                          </li>
                                          <li>
                                            <a className="capitalize" href="/category/nextjs">NextJS</a>
                                            </li>
                                            <li>
                                              <a className="capitalize" href="/category/react">React</a></li><li tabIndex="0">
                                                <button>More <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg></button><ul className="p-2 bg-base-200 shadow-md"><li><a className="capitalize" href="/category/graphql">GraphQL</a></li><li><a className="capitalize" href="/category/tailwindcss">TailwindCSS</a></li><li><a className="capitalize" href="/category/javascript">Javascript</a></li><li><a className="capitalize" href="/category/daisyui">DaisyUI</a></li><li><a class="capitalize" href="/category/css">CSS</a></li><li><a class="capitalize" href="/category/typescript">Typescript</a></li><li><a class="capitalize" href="/category/node">Node</a></li></ul></li></ul></div><div class="navbar-end"><button title="Toggle Dark/Light Theme" class="btn btn-circle btn-ghost"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button></div></div>
  </div>