import { useEffect, useState } from "react";
import { getSkips } from "../api/skipService";
import type { Skip } from "../types/skip";

export function useSkips() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoad] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSkips()
      .then(setSkips)
      .catch(() => setError("Could not load skips"))
      .finally(() => setLoad(false));
  }, []);

  return { skips, loading, error };
}
