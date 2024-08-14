"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Получаем значение переменной окружения
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

// Проверяем наличие URL, если нет - выбрасываем ошибку
if (!convexUrl) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not defined. Please set it in your environment variables.");
}

// Создаем ConvexReactClient только если URL существует
const convex = new ConvexReactClient(convexUrl);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
