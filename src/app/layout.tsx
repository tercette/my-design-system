import "./globals.css";
import ClientLayout from "@/components/ui/client-layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}