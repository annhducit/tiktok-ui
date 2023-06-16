import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('btn', {
        line: data.line,
    });
    return (
        <div>
            <Button className={cx(classes)} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
