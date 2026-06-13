export function createId() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

export function today() {
  return new Date().toISOString().split("T")[0];
}
