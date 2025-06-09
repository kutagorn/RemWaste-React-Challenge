import type { Skip } from "../types/skip";

const URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export async function getSkips(): Promise<Skip[]> {
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Failed to fetch skips");
  return res.json();
}
