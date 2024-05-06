import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import useStore from '~/store';
import cmds from '~/store/commands';
import styles from './Task.module.scss';
import { TaskStatus } from '~/store/reducer';
import StatusBox from '~/comps/StatusBox';

const cx = classNames.bind(styles);

export default function Task({ taskId }) {
  const [state, dispatch] = useStore();
  const task = state.tasks[taskId];

  function handleRemove() {
    dispatch(cmds.delTask(taskId));
  }

  function handleToggle() {
    if (TaskStatus.getBool(task.status))
      dispatch(cmds.updTaskStatus(taskId, TaskStatus.PENDING));
    else dispatch(cmds.updTaskStatus(taskId, TaskStatus.DONE));
  }

  return (
    <div className={cx('wrapper')}>
      <p
        className={cx('desc', {
          [cx('done')]: TaskStatus.getBool(task.status),
        })}
      >
        {task.desc}
      </p>
      <div className={cx('btns')}>
        <button className={cx('btn', 'btn-edit')}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <StatusBox
          status={TaskStatus.getBool(task.status)}
          onClick={handleToggle}
        />
        <button className={cx('btn', 'btn-remove')} onClick={handleRemove}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
