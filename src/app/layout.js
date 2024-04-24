import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat with NLP and Real Time Chat With Web Socket",
  description: "Created by Zunaid Ahammed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <QueryProvider>
        <body className={inter.className}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
      </QueryProvider>
      <Toaster richColors />
    </html>
  );
}
