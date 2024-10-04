import "./globals.css";

export const metadata = {
  title: "BMI Calculator",
  description: "A simple BMI Calculator built with Next.js and raw CSS that calculates Body Mass Index and provides fitness advice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
