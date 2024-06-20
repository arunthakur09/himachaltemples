import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Himachal Temples</title>
        <meta name="description" content="This is my an app about temples in Himachal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
