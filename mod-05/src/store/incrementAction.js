export default function createIncrementAction(amount) {
  return {
    type: "increment",
    payload: amount
  };
}
