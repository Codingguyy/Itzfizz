// Deterministic pseudo-random generator so server and client render identical markup.
export function seeded(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}
