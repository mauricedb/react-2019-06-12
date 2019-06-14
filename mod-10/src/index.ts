class Calculator {
  constructor(private readonly msg?: string) {}

  add(x: number, y: number) {
    const result = x + y;

    if (typeof this.msg !== "undefined") {
      console.log(this.msg.toString(), result);
    }

    return result;
  }

  subtract(x: number, y: number) {
    const result = x - y;
    return result;
  }
}

const x = document.getElementById("x") as HTMLInputElement;
const y = document.getElementById("y") as HTMLInputElement;
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator();

if (add && result) {
  add.addEventListener("click", () => {
    result.textContent = calculator.add(+x.value, +y.value).toString();
  });
}

if (subtract && result) {
  subtract.addEventListener("click", () => {
    result.textContent = calculator.subtract(+x.value, +y.value).toString();
  });
}

let person = {
  firstName: "",
  lastName: "",
  age: 0
};

type Person = typeof person;

function printPerson(p: typeof person) {
  console.log(p.firstName);
}

printPerson({
  firstName: "",
  lastName: "",
  age: 0
});

function doStuff(p: { firstName: string }) {
  console.log(p.firstName);
}

const anObject = {
  firstName: "",
  lastName: "",
  age: 0
};

doStuff(anObject);

type Named = { name: string; city: number };
type HasAdres = {
  street: string;
  city: string;
};

type Both = Named | HasAdres;

const b: Both = {
  name: "",
  city: "",
  street: ""
};

type Cat = {
  theAnimalType: "cat";
  name: string;
  sleep(): void;
};

type Dog = {
  theAnimalType: "dog";
  sleep(): void;
  eat(): void;
};

type Animal = Cat | Dog;

function doThing(animal: Animal) {
  if (animal.theAnimalType === "dog") {
    animal.eat();
  }
}

type Demo = 1 | 2 | "one" | "two";

const demo: Demo = "one";

const cat: Partial<Cat> = {
  name: "Zorro"
};

type PartialCat = {
  theAnimalType?: "cat";
  name?: string;
  sleep?: Function;
};

type DoThingParam = Parameters<typeof doThing>[0];
