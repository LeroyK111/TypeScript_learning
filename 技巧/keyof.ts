
type Point = { x: number; y: number };

type NullablePoint = {
  [K in keyof Point]: Point[K] | null;
};

// NullablePoint 成为一种新类型，具有与 Point 相同的键，但具有可为空的值。


