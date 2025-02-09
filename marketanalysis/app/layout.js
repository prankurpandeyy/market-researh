import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Market Research & Data Aggregator Tool",
  description: "Aggregate and analyze market data from various sources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen ">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
