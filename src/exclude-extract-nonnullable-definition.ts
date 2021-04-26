export {};

type MyExclude<T> = T extends string | number ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// NonNullableTypes : ユニオン型から、undefined, nullなどを排除してくれる型のこと
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>;