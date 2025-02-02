type Mods = Record<string, boolean | string>;
export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
  return [
    cls,
    ...additional.filter(Boolean), // filter if classname is undefined or null
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}
