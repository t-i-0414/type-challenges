/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */
type MinusOneMap = {
  "0": "9";
  "1": "0";
  "2": "1";
  "3": "2";
  "4": "3";
  "5": "4";
  "6": "5";
  "7": "6";
  "8": "7";
  "9": "8";
};

type StringToArr<T extends string> = T extends `${infer F}${infer Rest}`
  ? [F, ...StringToArr<Rest>]
  : [];

type ArrToString<T extends unknown[]> = T extends [infer F, ...infer Rest]
  ? F extends string
    ? Rest extends string[]
      ? `${F}${ArrToString<Rest>}`
      : F
    : ""
  : "";

type Decrease<T extends string> = StringToArr<T> extends [
  ...infer H,
  infer Last
]
  ? Last extends "0"
    ? H extends string[]
      ? [
          ...(Decrease<ArrToString<H>> extends ["0"]
            ? []
            : Decrease<ArrToString<H>>),
          MinusOneMap[Last]
        ]
      : never
    : Last extends keyof MinusOneMap
    ? [...H, MinusOneMap[Last]]
    : [...H]
  : never;

type StringToLenghtArr<
  T extends string,
  Res extends any[] = []
> = `${Res["length"]}` extends T ? Res : StringToLenghtArr<T, [...Res, 1]>;

type PraseInt<
  T,
  Res extends unknown[] = []
> = T extends `${infer Head}${infer Rest}`
  ? PraseInt<Rest, [...XTen<Res>, ...StringToLenghtArr<Head>]>
  : Res["length"];

type XTen<T extends unknown[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];
type MinusOne<T extends number> = PraseInt<
  ArrToString<Decrease<ArrToString<StringToArr<`${T}`>>>>
>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
