class Calculator {
  // private msg: string = "";
  constructor(private readonly msg: string = "The default") {
    // this.msg = msg;
  }

  add(x: number, y: number) {
    const result = x + y;

    // this.msg = 'Stuff'
    console.log(this.msg, result);

    return result;
  }

  subtract(x, y) {
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

add.addEventListener("click", () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener("click", () => {
  result.textContent = calculator.subtract(x.value, y.value).toString();
});

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
