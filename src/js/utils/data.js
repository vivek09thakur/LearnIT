export const SITE_ROOT = new URL("../../../", import.meta.url);

export function resolveUrl(path) {
  return new URL(path, SITE_ROOT).href;
}

export async function loadJson(path) {
  const response = await fetch(resolveUrl(path));
  if (!response.ok) {
    throw new Error(`Failed to load ${path} (HTTP ${response.status})`);
  }
  return response.json();
}
