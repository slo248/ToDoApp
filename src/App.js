import classNames from 'classnames/bind';

import Provider from '~/store/Provider';
import Header from '~/comps/Header';
import Input from '~/comps/Input';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

export default function App() {
  return (
    <div className={cx('wrapper')}>
      <Header classNames={cx('header-wrapper')} />
      <div className={cx('content')}>
        <Provider className={cx('input-wrapper')}>
          <Input />
        </Provider>
      </div>
    </div>
  );
}
