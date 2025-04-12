import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './StatusBox.module.scss';

const cx = classNames.bind(styles);

export default function StatusBox({ status, onClick }) {
  const [state, setState] = useState(status);

  function handleClick() {
    setState(!state);
    onClick();
  }

  return (
    <div className={cx('wrapper', { active: state })} onClick={handleClick}>
      {state && <FontAwesomeIcon className={cx('icon')} icon={faCheck} />}
    </div>
  );
}
