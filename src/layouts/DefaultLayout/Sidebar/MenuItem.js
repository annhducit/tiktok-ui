import classNames from 'classnames/bind';

import style from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function MenuItem({ icon, title, to }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            {icon}
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
