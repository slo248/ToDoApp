import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faCheck,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import useStore from '~/store';
import cmds from '~/store/commands';
import styles from './Task.module.scss';
import { TaskStatus } from '~/store/reducer';

const cx = classNames.bind(styles);

export default function Task({ taskId }) {
  const [state, dispatch] = useStore();
  const task = state.tasks[taskId];

  function handleRemove() {
    dispatch(cmds.delTask(taskId));
  }

  return (
    <div className={cx('wrapper')}>
      <p
        className={cx('desc', {
          [cx('done')]: task.status === TaskStatus.DONE,
        })}
      >
        {task.desc}
      </p>
      <div className={cx('btns')}>
        <button className={cx('btn', 'btn-edit')}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className={cx('btn', 'btn-done')}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className={cx('btn', 'btn-remove')} onClick={handleRemove}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
