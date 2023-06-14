import classNames from 'classnames/bind';

import style from './AccountItem.module.scss';
import image from '~/assets/images/avatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src={image} alt=""></img>
            <div className={cx('content')}>
                <p className={cx('name')}>
                    Beautiful Song
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('usename')}>By Sia</span>
            </div>
        </div>
    );
}

export default AccountItem;
