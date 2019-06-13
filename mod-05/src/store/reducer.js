function increment(state, action) {
  return { ...state, count: state.count + action.payload };
}

const functions = {
  increment
};

export default function reducer(state = { count: 42 }, action) {
  //   switch (action.type) {
  //     case "increment":
  //       return { ...state, count: state.count + action.payload };
  //     default:
  //       return state;
  //   }

  const fn = functions[action.type];
  if (fn) {
    return fn(state, action);
  }

  return state;
}
