import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 - ошибка, 0 - успешное завершение
  }
};



/* ` - Это template literals (шаблонные строки) в JavaScript.
Позволяют:Многострочные строки и встраивание переменных и выражений прямо внутрь строки.
Пример: const name = 'Alex';
console.log(`Hello, ${name}!`);  // Hello, Alex!

Когда тебе нужно вставить переменную внутрь строки:
В JS — обратные кавычки + ${ }
В Python — f + обычные кавычки + { }

*/