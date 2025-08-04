import '../styles/globals.css'
import { Gaegu, IBM_Plex_Serif, Reenie_Beanie } from "next/font/google"

const gaegu = Gaegu({
  variable: "--font-gaegu",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlex = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: "400",
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-reenie-beanie",
  subsets: ["latin"],
  weight: "400",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${gaegu.variable} ${ibmPlex.variable} ${reenieBeanie.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

