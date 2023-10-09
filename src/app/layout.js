import Footer1 from "../../components/Footer1";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css"
import { Poppins } from "next/font/google";
import Slider from "../../components/Slider";

const inter = Poppins({
  subsets: ["latin-ext"],
  style: ["italic"],
  weight: ["300", "400", "500", "600", "700", "800", "900",  ],
});

export const metadata = {
  title: "SSA-Arquitectos",
  description:
    "Somos un grupo de arquitectos apasionados por nuestra profesion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/mineral.png "></link>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
      {/*  <Footer1/>  */}
        {/* <Footer/> */}
       {/*  <Slider/> */}
      </body>
    </html>
  );
}
