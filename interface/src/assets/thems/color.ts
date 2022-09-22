export const colors = {
  danger: '#B30049',
  white: '#f9f9f9',
  black: '#070D0D',
  cursor: '179,0,73',
  lightBlack: '#231F20 ',
  yellow: '#fff800',
  lightBlue: '#133153',
  darkBlue: '#081422',
  darkBlue1: '#0b1d32',
}

export type ColorsInterface = typeof colors

// 👇️ type Keys = "name" | "age" | "country"
export type ColorType = keyof typeof colors
