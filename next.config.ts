// next.config.js или next.config.mjs
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Добавьте другие необходимые настройки
  images: {
    unoptimized: true, // Обязательно для статического экспорта
  },
  trailingSlash: true, // Рекомендуется для статических экспортов
  distDir: "out", // Опционально - каталог для экспорта
};

export default nextConfig;