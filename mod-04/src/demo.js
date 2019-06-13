console.clear();

function createChangeName(name) {
  const action = {
    type: "changeName",
    payload: name
  };

  return action;
}

let store = {
  count: 0,
  person: {
    firstName: ""
  }
};

const listeners = [];

function dispatch(action) {
  switch (action.type) {
    case "changeName":
      //   store.person.firstName = action.payload;
      store = {
        ...store,
        person: { ...store.person, firstName: action.payload }
      };
      break;

    default:
      break;
  }

  listeners.forEach(l => l(store));
}

listeners.push(s => console.log(s));
listeners.push(s => console.warn(s));

const changeNameAction = createChangeName("Jack");
dispatch(changeNameAction);

setInterval(() => {
  const changeNameAction = createChangeName(new Date().toLocaleTimeString());
  dispatch(changeNameAction);
}, 1000);

setTimeout(() => {
  listeners.length = 1;
}, 5000);
