export {};

type Profile = {
  name: string,
  age: number
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P] | null; // in keyof === mapped types : 作ったオブジェクトのタイプから、プロパティを1つずつ取り出している
};
type OptionalProfile = Optional<Profile>;