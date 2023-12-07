export function generateUniqueString(num) {
   const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   return Array.from(
      { length: num },
      () => characters[Math.floor(Math.random() * characters.length)]
   ).join("");
}
