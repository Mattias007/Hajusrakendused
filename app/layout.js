import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/nav";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hajusrakendused",
  description: "Next > Larvel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="min-h-screen">
          <Header />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
