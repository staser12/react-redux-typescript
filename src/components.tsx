
class ToDo {
  id: number;
  isDone: boolean;
  text: string;

  constructor(id: number, isDone: boolean, text: string) {
    this.id = id;
    this.isDone = isDone;
    this.text = text;
  }
}

const dummyTodos = [
  new ToDo(0, true, 'make components'),
  new ToDo(1, false, 'design actions'),
  new ToDo(2, false, 'implement reducer'),
  new ToDo(3, false, 'connect components')
];