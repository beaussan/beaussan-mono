export type RequiredNotNullObject<T> = { [P in keyof T]-?: NonNullable<T[P]> };
export type MarkSomeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<RequiredNotNullObject<Pick<T, K>>>;
