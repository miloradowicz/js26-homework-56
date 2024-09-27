export enum IngredientType {
  Bread,
  Stuffing,
}

export interface BuilderIngredient {
  get displayName(): string;
  get price(): number;
  get img(): string;
}

export interface PreviewIngredient {
  get displayName(): string;
  get component(): FC;
}

export interface Ingredient extends BuilderIngredient, PreviewIngredient {
  get type(): LayerType;
}
