import localFont from "next/font/local";
import {Raleway} from 'next/font/google'
import "./globals.css";



const raleway = Raleway({
  subsets: ['latin']
})

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
