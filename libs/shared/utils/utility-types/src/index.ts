/**
 * Makes all keys required and not null
 * Example:
 * Given { a?: string | null; b?:string | null }
 * called like this RequiredNotNullObject<MyType>
 * It will output { a: string; b: string }
 */
export type RequiredNotNullObject<T> = { [P in keyof T]-?: NonNullable<T[P]> };

/**
 * Makes some defined keys required
 * Example:
 * Given { a?: string | null; b?:string | null }
 * called like this MarkSomeRequired<MyType, 'a'>
 * It will output { a: string; b?:string | null }
 */
export type MarkSomeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<RequiredNotNullObject<Pick<T, K>>>;

/**
 * Set all keys in an object to Never. Useful for writing custom types
 * Example:
 * Given { a: string; b: number }
 * called like this MakeNever<MyType>
 * It will output { a: never; b: never }
 */
export type MakeNever<T> = {
  [P in keyof T]: never;
};

/**
 * Makes a discriminated union
 * Useful if you have part of the object where you need
 * Example :
 * Given { buttonLabel: string, buttonIcon?: string; onClick: () => void }
 * Called like this DiscriminatedTypes<MyType, 'buttonLabel'>
 * It will output { buttonLabel?: string; buttonIcon?: never; onClick?: never } | { buttonLabel: string; buttonIcon?: string: onClick: () => void; }
 * This way :
 *   If buttonLabel is not set, buttonIcon and onClick cannot be set
 *   If buttonLabel is set, buttonIcon can be set and onClick is mandatory
 */
export type DiscriminatedTypes<T, K extends keyof T> =
  | MakeNever<Partial<Pick<T, K>> & Partial<Omit<T, K>>>
  | (Required<Pick<T, K>> & Omit<T, K>);
