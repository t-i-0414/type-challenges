/*
  14 - FirstOfArray of Array
  -------
  by Anthony Fu (@antfu) #easy #array

  ### Question

  Implement a generic `FirstOfArray<T>` that takes an Array `T` and returns it's firstOfArray element's type.

  For example:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = FirstOfArray<arr1> // expected to be 'a'
  type head2 = FirstOfArray<arr2> // expected to be 3
  ```

  > View on GitHub: https://tsch.js.org/14
*/

/* _____________ Your Code Here _____________ */

type FirstOfArray<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FirstOfArray<[3, 2, 1]>, 3>>,
  Expect<Equal<FirstOfArray<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<FirstOfArray<[]>, never>>,
  Expect<Equal<FirstOfArray<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  FirstOfArray<"notArray">,
  // @ts-expect-error
  FirstOfArray<{ 0: "arrayLike" }>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/14/answer
  > View solutions: https://tsch.js.org/14/solutions
  > More Challenges: https://tsch.js.org
*/
