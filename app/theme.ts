import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8D6E63", // カフェの木目っぽいブラウン
    },
    secondary: {
      main: "#FFB74D", // 柔らかいオレンジ
    },
    background: {
      default: "#FFF8E7", // クリーム系
      paper: "#FFFFFF",
    },
    text: {
      primary: "#3E2723",
      secondary: "#5D4037",
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;