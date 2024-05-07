import actions from './actions';

export const TaskStatus = Object.freeze({
  PENDING: 'Pending',
  DONE: 'Done',
  getName(flag) {
    return flag ? this.DONE : this.PENDING;
  },
  getBool(name) {
    return name === this.DONE;
  },
});

export const initState = {
  tasks: [
    {
      desc: 'Do homework',
      status: TaskStatus.PENDING,
    },
    {
      desc: 'Have breakfast',
      status: TaskStatus.DONE,
    },
  ],
  editTaskId: null,
};

export default function reducer(state, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actions.ADD:
      if (action.taskDesc === '') alert(`Task description is empty!`);
      else if (newState.tasks.find((task) => task.desc === action.taskDesc))
        alert(`Task "${action.taskDesc}" is already existed!`);
      else
        newState.tasks.unshift({
          desc: action.taskDesc,
          status: TaskStatus.PENDING,
        });
      break;
    case actions.UPD_DESC:
      newState.tasks[action.taskId].desc = action.newTaskDesc;
      break;
    case actions.UPD_STATUS:
      newState.tasks[action.taskId].status = action.newTaskStatus;
      break;
    case actions.SET_EDIT_ID:
      newState.editTaskId = action.taskId;
      break;
    case actions.DEL:
      newState.tasks.splice(action.taskId, 1);
      break;
    default:
      throw new Error(`Action ${action.type} does not existed!`);
  }
  return newState;
}
