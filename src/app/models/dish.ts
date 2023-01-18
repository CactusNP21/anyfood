export interface Dish {
  information: {
    title: string
    des: string
    img?: string
    duration: number
    topics?: string[]
    servings: number
  }
  ingredients: {
    name: string
    unit: string
    quantity: number
    price: number
    mainImg: string
  }[]
  steps: {
    title: string
    description: string
  }[]
  price: number
  _id?: string
}

export interface DishResponse {
  title: string
  description: string
  url: string
  duration: number
  topics: string[]
  servings: number
  ingredients: {
    name: string
    unit: string
    quantity: number
    price: number
    mainImg: string
  }[]
  steps: {
    title: string
    description: string
  }[]
  price: number
  _id: string

}

export type Ingredients = Pick<Dish, "ingredients">["ingredients"]
export type Steps = Pick<Dish, "steps">['steps']
export type DishInfo = Omit<Dish, "steps" | "ingredients">["information"]
