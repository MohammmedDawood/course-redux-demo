const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// create store
const store = redux.createStore(counterReducer);

// console.log("Initial state: ", store.getState());

// subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// actions
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
