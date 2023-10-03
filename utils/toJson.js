export function parseCookie(stringifiedJson) {
  if (!stringifiedJson) return undefined;
  try {
    return JSON.parse(stringifiedJson);
  } catch {
    return undefined;
  }
}
