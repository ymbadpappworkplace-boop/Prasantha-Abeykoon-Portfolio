import type { Metadata, Viewport } from "next";
import "./globals.css";
import { person } from "@/lib/data";

export const metadata: Metadata = {
  title: `${person.name} · ${person.role}`,
  description: person.headline,
  openGraph: { title: person.name, description: person.headline, type: "profile" },
};

export const viewport: Viewport = { themeColor: "#080d18" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document.documentElement;d.classList.add('js');" +
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!sessionStorage.getItem('pa-intro'))" +
              "d.classList.add('is-intro');}catch(e){}",
          }}
        />
      </head>
      <body>
        {children}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".reveal-up{opacity:1!important;transform:none!important;filter:none!important;}" +
                ".scroll-text .sw,.reveal-up .cred li,.reveal-up .focus-num{opacity:1!important;filter:none!important;translate:none!important;}" +
                ".reveal-up .h2,#contact .reveal-up h2{clip-path:none!important;transform:none!important;}" +
                ".timeline::before{transform:none!important;}" +
                ".focus-icon svg,.cred-icon svg{stroke-dasharray:none!important;stroke-dashoffset:0!important;}",
            }}
          />
        </noscript>
      </body>
    </html>
  );
}
