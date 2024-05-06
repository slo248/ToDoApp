import actions from './actions';

function addTask(taskDesc) {
  return {
    type: actions.ADD,
    taskDesc,
  };
}

function updTask(task) {
  return {
    type: actions.UPD,
    task,
  };
}

function delTask(taskId) {
  return {
    type: actions.DEL,
    taskId,
  };
}

export default { addTask, updTask, delTask };
