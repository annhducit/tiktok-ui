import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src={data.avatar} alt=""></img>
            <div className={cx('content')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('usename')}>{data.nickname}</span>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
