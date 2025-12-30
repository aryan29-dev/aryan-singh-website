import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Aryan Singh",
  description: "Personal Website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


