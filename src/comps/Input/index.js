import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

export default function Input({
  placeholder = 'Enter new task...',
  buttonText = 'Add',
}) {
  return (
    <div className={cx('wrapper')}>
      <input
        className={cx('input')}
        placeholder={placeholder}
        spellCheck={false}
      />
      <button className={cx('btn')}>{buttonText}</button>
    </div>
  );
}
