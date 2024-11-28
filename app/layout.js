import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata = {
  title: "Hearing the Voice of God",
  description: "This is the devotion for hearing the voice of God",
  openGraph:{
    title: "Hearing the Voice of God",
    description: "This is the devotion for hearing the voice of God",
    image:[
      {
        url: ''
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
