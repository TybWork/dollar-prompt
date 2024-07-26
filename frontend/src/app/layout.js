import { Finlandica } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Providers } from "./Redux/Provider";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import Cart from "./Components/Cart/Cart";

const finlandica = Finlandica({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={finlandica.className} style={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'space-between', overflowX: 'hidden' }}>

          {/* this provider is from global redux */}
          <Header />
          <MobileNavbar />
          <Cart />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
