import localFont from "next/font/local";
import {Raleway} from 'next/font/google'
import "./globals.css";



const raleway = Raleway({
  subsets: ['latin']
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Devotion",
  description: "This is a devotional application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
