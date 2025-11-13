import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CalendarPro - Scheduling Made Simple",
  description: "The most powerful scheduling platform. 100x better than Calendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#fff',
          colorBackground: '#000',
          colorText: '#fff',
          colorInputBackground: '#1a1a1a',
          colorInputText: '#fff',
        },
        elements: {
          formButtonPrimary:
            'bg-white text-black hover:bg-gray-200',
          card:
            'bg-black border border-white/10',
          headerTitle:
            'text-white',
          headerSubtitle:
            'text-gray-400',
          socialButtonsBlockButton:
            'border-white/20 text-white hover:bg-white/10',
          formFieldLabel:
            'text-white',
          formFieldInput:
            'bg-white/5 border-white/10 text-white',
          footerActionLink:
            'text-white hover:text-gray-300',
          identityPreviewText:
            'text-white',
          dividerLine:
            'bg-white/10',
          dividerText:
            'text-gray-400',
        }
      }}
    >
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
