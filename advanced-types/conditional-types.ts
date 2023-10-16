type ValueOrArray<T, U> = T extends any[] ? T : U

type Example1 = ValueOrArray<number[], string> // number[]

type Example2 = ValueOrArray<string, string[]> // string[]

type Example3 = ValueOrArray<boolean, string> // string

type Example4 = ValueOrArray<string, boolean[]> // boolean[]
