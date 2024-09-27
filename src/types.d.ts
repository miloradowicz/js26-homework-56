export enum IngredientType {
  Bread,
  Stuffing,
}

export interface BuilderIngredient {
  get id(): number;
  get displayName(): string;
  get price(): number;
  get img(): string | undefined;
}

export interface PreviewIngredient {
  get id(): number;
  get displayName(): string;
  get component(): FC;
}

export interface Ingredient extends BuilderIngredient, PreviewIngredient {
  get type(): LayerType;
}
