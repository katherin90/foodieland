import "@/styles/main.sass"
import {inter} from '@/styles/fonts'

import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import DemoPopup from "@/components/demo-popup/demo-popup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        <DemoPopup/>
      </body>
    </html>
  );
}
