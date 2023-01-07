import "./styles/globals.css";
import Navigation from "../components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="w-full bg-gray-300 p-2">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
