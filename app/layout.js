'use client'
import "./globals.css";

import { StoreProvider } from "./context/StoreContext";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
// import Login from "./component/login/login";

export default function RootLayout({ children }) {
  return (
    <html>
      <body >
        <StoreProvider>
          <Header />
          <main style={{marginTop: '80px'}}>
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
