import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import useStore from '~/store';
import cmds from '~/store/commands';
import styles from './Task.module.scss';
import { TaskStatus } from '~/store/reducer';
import StatusBox from '~/comps/StatusBox';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

export default function Task({ taskId }) {
  const [state, dispatch] = useStore();
  const task = state.tasks[taskId];

  const [inp, setInp] = useState(task.desc);
  const inputRef = useRef();

  useEffect(() => inputRef?.current?.focus());

  function handleRemove() {
    if (state.editTaskId === taskId) {
      alert(`Task "${task.desc}" is being edited and cannot be deleted!`);
      return;
    }
    dispatch(cmds.delTask(taskId));
  }

  function handleToggle() {
    if (TaskStatus.getBool(task.status))
      dispatch(cmds.updTaskStatus(taskId, TaskStatus.PENDING));
    else dispatch(cmds.updTaskStatus(taskId, TaskStatus.DONE));
  }

  function handleEdit() {
    if (task.status === TaskStatus.DONE) {
      alert(`Task "${task.desc}" is done and cannot be edited!`);
      return;
    }
    dispatch(cmds.setEditTask(taskId));
  }

  function handleDoneEdit() {
    dispatch(cmds.updTaskDesc(taskId, inp.trim()));
    dispatch(cmds.setEditTask());
  }

  function handleKeyUp(e) {
    if (e.key === 'Enter' || e.key === 'Escape') handleDoneEdit();
  }

  return (
    <div className={cx('wrapper')} onDoubleClick={handleEdit}>
      {state.editTaskId === taskId ? (
        <div className={cx('edit-wrapper')}>
          <input
            ref={inputRef}
            className={cx('input')}
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            onKeyUp={handleKeyUp}
            onBlur={handleDoneEdit}
          />
          <button className={cx('btn')} onClick={handleDoneEdit}>
            Done
          </button>
        </div>
      ) : (
        <p
          className={cx('desc', {
            [cx('done')]: TaskStatus.getBool(task.status),
          })}
        >
          {task.desc}
        </p>
      )}
      <div className={cx('btns')}>
        <button className={cx('btn', 'btn-edit')} onClick={handleEdit}>
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
