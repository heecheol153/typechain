// 이부분은 JS에선 안움직인다.
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "heecheol",
  age: 58,
 gender: "man"
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name} your are ${person.age}, you are a 
  ${person.gender}!`;
};

console.log(sayHi(person));

export {};