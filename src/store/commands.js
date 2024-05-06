import actions from './actions';

export function addTask(task) {
  return {
    type: actions.ADD,
    task,
  };
}

export function updTask(task) {
  return {
    type: actions.UPD,
    task,
  };
}

export function updTask(task) {
  return {
    type: actions.DEL,
    task,
  };
}
