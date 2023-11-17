import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const IranianSans = localFont({
  src: "../public/fonts/IranianSans.ttf",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template: "%s | موزیک اوشن پلتفرم اشتراک و دانلود موزیک",
    default: "موزیک اوشن پلتفرم اشتراک و دانلود موزیک",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${IranianSans.className} text-white bg-next-deep-black`}
      >
        {children}
      </body>
    </html>
  );
}
