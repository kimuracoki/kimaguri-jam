import type { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

export const metadata = {
  title: "kimaguri jam | Official Site",
  description: "Instrumental trio band with a cozy café vibe.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}