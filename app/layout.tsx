import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "鳞境｜中国毒蛇科普图鉴",
  description: "从中国地图出发，了解常见毒蛇的省级分布、生态习性与安全常识。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
