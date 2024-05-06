import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
import * as cmds from '~/store/commands';
import useStore from '~/store';

const cx = classNames.bind(styles);

export default function Input({
  placeholder = 'Enter new task...',
  buttonText = 'Add',
}) {
  const [state, dispatch] = useStore();
  const [taskDesc, setTaskDesc] = useState('');
  const inputRef = useRef();

  function handleAdd() {
    dispatch(cmds.addTask(inputRef.current.value));
    setTaskDesc('');
    inputRef.current.focus();
  }

  function handleKey(e) {
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className={cx('wrapper')}>
      <input
        ref={inputRef}
        className={cx('input')}
        value={taskDesc}
        placeholder={placeholder}
        spellCheck={false}
        onKeyUp={handleKey}
        onChange={(e) => setTaskDesc(e.target.value)}
      />
      <button className={cx('btn')} onClick={handleAdd}>
        {buttonText}
      </button>
    </div>
  );
}
