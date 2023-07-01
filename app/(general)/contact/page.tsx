import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: 'contact Page',
  description: 'Abuto page',
  keywords: ['About Pag','Contratos','firma Digital']
};

export default function ContactPage() {
  return(
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">Contact page</span>
    </main>
  )
}

