export enum LayerType {
  Bread,
  Stuffing,
}

export interface Layer {
  get name(): string;
  get displayName(): string;
  get price(): number;
  get type(): LayerType;
  get img(): string;
  get component(): JSX.Element;
}
