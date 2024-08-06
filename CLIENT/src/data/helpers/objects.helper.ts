/**
 * Returns the key of an enum as a string given its value.
 *
 * @template T - The type of the enum object.
 * @param {T} flatObject - The enum object.
 * @param {unknown} value - The value to find the corresponding key for.
 * @returns {keyof T | undefined} The key of the enum as a string, or undefined if the value is not found.
 */
export const getEnumKeyAsString = <T extends Record<PropertyKey, unknown>>(
  flatObject: T,
  value: unknown
): keyof T | undefined =>
  Object.keys(flatObject).find(key => flatObject[key] === value) as
    | keyof T
    | undefined;

export const ObjectsHelper = {
  getEnumKeyAsString,
};
