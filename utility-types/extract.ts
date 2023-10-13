type AvailableColors = "Red" | "Green" | "Blue" | "Yellow" | "Purple"
type FavoriteColors = "Red" | "Green" | "Orange"

type FilteredFavoriteColors = Extract<AvailableColors, FavoriteColors>

const myFavoriteColors: FilteredFavoriteColors[] = ["Green", "Red"]
