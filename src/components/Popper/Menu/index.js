import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import Header from './header';
import { useState } from 'react';
const cx = classNames.bind(style);

const defaultFC = () => {};
function Menu({ children, items = [], onChange = defaultFC }) {
    const [data, setData] = useState([{ data: items }]);
    const current = data[data.length - 1];

    const renderItem = () => {
        return current.data.map((item, i) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={i}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setData((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper className={cx('menu-propper')}>
                        {data.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setData((pre) => pre.slice(0, data.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </WrapperPopper>
                </div>
            )}
            onHide={() => {
                setData((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
