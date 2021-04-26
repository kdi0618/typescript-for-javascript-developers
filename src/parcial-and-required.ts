export {};

type Profile = {
  name: string,
  age?: number,
  zipCode: number,
};

type PercialType = Partial<Profile>;
type RequiredType = Required<Profile>
