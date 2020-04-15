export interface Todo {
  id: number
  title: string
  status: boolean
  priority: Priority
  category: Category
  deadline: Date
}

export interface Priority {
  id: number
  title: string
  color: string
}

export interface Category {
  id: number
  title: string
}
