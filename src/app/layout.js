import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Varun Vetrivendan",
  description: "Portflio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Contrail+One&family=Julius+Sans+One&family=Lemonada:wght@300..700&display=swap"
      />
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
