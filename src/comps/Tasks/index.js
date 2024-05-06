import classNames from 'classnames/bind';

import Task from './Task';
import useStore from '~/store';
import styles from './Tasks.module.scss';

const cx = classNames.bind(styles);

export default function Tasks() {
  const [state, dispatch] = useStore();
  const tasks = state.tasks;
  return (
    <ul className={cx('wrapper')}>
      {tasks.map((task, index) => (
        <li key={index} className={cx('task-wrapper')}>
          <Task taskId={index} />
        </li>
      ))}
    </ul>
  );
}
