type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type Human = {
  isAlive: boolean;
};

type Human1 = Person & Human;

interface Person1 {
  readonly name: string;
}

interface Person2 extends Person1 {
  age: number;
}

let riaz: Person2 = {
  name: "riaz",
  age: 18,
};

// riaz.name = "bilal"

type UserName = string;
