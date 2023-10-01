type Colors = "red" | "green" | "blue"
type RGB = [red: number, green: number, blue: number]

const favoriteColors = {
  red: "yes",
  green: false,
  blue: "kinda",
} satisfies Record<Colors, unknown>

const g: boolean = favoriteColors.green

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>

const redComponent = palette.red.at(0)
const greenNormalized = palette.green.toUpperCase()
