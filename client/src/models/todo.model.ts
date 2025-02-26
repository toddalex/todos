export interface Todo {
  id: string;
  text: string;
}

export interface TodoState {
 todos: Todo[]
 loading: boolean
 error: null | string
}