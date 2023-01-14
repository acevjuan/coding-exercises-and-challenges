async function hello() {
  return 'world';
};

let lucky: number;

lucky = 23;

type Style = string;

let font: Style;

interface Person {
  first: string,
  last: string
  [key: string]: any
}

const person: Person = {
  first: 'Jeff',
  last: 'Delaney'
};

const person2: Person = {
  first: 'Usain',
  last: 'Bolt',
  fast: true
}

function pow(x: number, y: number) {
  return Math.pow(x, y);
}

const arr: number[] = [];

arr.push(1);