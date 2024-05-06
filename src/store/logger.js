export default function logger(reducer) {
  return (state, action) => {
    console.group(action.type);
    console.log(action);
    console.log('Previous state:', state);
    const newState = reducer(state, action);
    console.log('Next state:', newState);
    console.groupEnd();
    return newState;
  };
}
