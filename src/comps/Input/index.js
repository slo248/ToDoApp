import { useContext, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import Context from '~/store/Context';
import * as cmds from '~/store/commands';

const cx = classNames.bind(styles);

export default function Input({
  placeholder = 'Enter new task...',
  buttonText = 'Add',
}) {
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef();

  function handleAdd(e) {
    dispatch(cmds.addTask(inputRef.current.value));
  }

  return (
    <div className={cx('wrapper')}>
      <input
        ref={inputRef}
        className={cx('input')}
        placeholder={placeholder}
        spellCheck={false}
      />
      <button className={cx('btn')} onClick={handleAdd}>
        {buttonText}
      </button>
    </div>
  );
}
