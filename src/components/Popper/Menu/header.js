import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <Button className={cx('header-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};

export default Header;
