import classNames from 'classnames/bind';

import Header from '~/comps/Header';
import Input from '~/comps/Input';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

export default function App() {
  return (
    <div className={cx('wrapper')}>
      <Header classNames={cx('header-wrapper')} />
      <div className={cx('content')}>
        <div className={cx('input-wrapper')}>
          <Input />
        </div>
      </div>
    </div>
  );
}
