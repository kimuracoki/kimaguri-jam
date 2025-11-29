import type { ReactNode } from "react";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "kimaguri jam | Official Site",
  description: "Instrumental trio band",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}