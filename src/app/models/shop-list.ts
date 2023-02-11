import {DishResponse} from "./dish";

export type ShopList = { name: string, unit: string, quantity: number, marked?: boolean }
export type Update = { old: DishResponse | undefined, updated: DishResponse }
