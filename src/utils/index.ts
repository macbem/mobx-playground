export function getRandomInt(): number {
  return crypto.getRandomValues(new Uint32Array(1))[0];
}

export interface EntityDict<T> {
  [id: number]: T;
}
