import classNames from 'classnames/bind';

import useStore from '~/store';
import styles from './Task.module.scss';

const cx = classNames.bind(styles);

export default function Task({ taskId }) {
  const [state, dispatch] = useStore();
  const task = state.tasks[taskId];
  return (
    <div className={cx('wrapper')}>
      <p className={cx('desc')}>{task.desc}</p>
      <button>Done</button>
    </div>
  );
}
