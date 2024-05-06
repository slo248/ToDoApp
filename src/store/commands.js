import actions from './actions';

export function addTask(taskDesc) {
  return {
    type: actions.ADD,
    taskDesc,
  };
}

export function updTask(task) {
  return {
    type: actions.UPD,
    task,
  };
}

export function delTask(task) {
  return {
    type: actions.DEL,
    task,
  };
}
