import actions from './actions';

export const TaskStatus = Object.freeze({
  PENDING: 'Pending',
  DONE: 'Done',
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
};

export default function reducer(state, action) {
  let newState = { ...state };
  switch (action.type) {
    case actions.ADD:
      newState.tasks.unshift({
        desc: action.taskDesc,
        status: TaskStatus.PENDING,
      });
      break;
    default:
      throw new Error(`Action ${action.type} does not existed!`);
  }
  return newState;
}
