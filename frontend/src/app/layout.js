import { Finlandica } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Providers } from "./Redux/Provider";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";

const finlandica = Finlandica({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={finlandica.className}>
        <Header />

        {/* this provider is from global redux */}
        <Providers>
          <MobileNavbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
