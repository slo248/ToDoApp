import actions from './actions';

function addTask(taskDesc) {
  return {
    type: actions.ADD,
    taskDesc,
  };
}

function updTaskDesc(taskId, newTaskDesc) {
  return {
    type: actions.UPD_DESC,
    taskId,
    newTaskDesc,
  };
}

function updTaskStatus(taskId, newTaskStatus) {
  return {
    type: actions.UPD_STATUS,
    taskId,
    newTaskStatus,
  };
}

function delTask(taskId) {
  return {
    type: actions.DEL,
    taskId,
  };
}

function setEditTask(taskId = null) {
  return {
    type: actions.SET_EDIT_ID,
    taskId,
  };
}

const all = { addTask, updTaskDesc, updTaskStatus, delTask, setEditTask };

export default all;
