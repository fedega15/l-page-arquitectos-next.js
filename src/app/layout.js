
import Header from "../../components/Header";
import "../../styles/globals.css"
import { Outfit } from "next/font/google"

const inter = Outfit({
  subsets: ["latin-ext"],
  style: ["normal"],
  weight: ["300", "400", "500", "700",  ],
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
      </body>
    </html>
  );
}
