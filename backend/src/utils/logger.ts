export const log = (type: 'info' | 'error' | 'warn' | 'bootstrap', message: string) => {
  console.log(`\x1b[35m${new Date().toISOString()} \x1b[33m[${type}]\x1b[0m ${message}`);
};
