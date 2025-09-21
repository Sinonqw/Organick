import mongoose from "mongoose";

declare global {
  // Расширяем globalThis, чтобы TS не ругался
  // при сохранении соединения с MongoDB
  // (обязательно export {}, чтобы файл был модулем)
  // Это защищает от повторных подключений в dev-режиме
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

export {};
