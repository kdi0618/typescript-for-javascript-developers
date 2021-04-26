export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, FunctionType>;

// NonNullableTypes : ユニオン型から、undefined, nullなどを排除してくれる型のこと
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>;