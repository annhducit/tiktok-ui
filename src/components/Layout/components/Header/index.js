import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { faMagnifyingGlass, faPlus, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import image from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function Header() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        setResult([]);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img className={cx('logo-image')} src={image.logo} alt=""></img>
                </div>
                <Tippy
                    visible={result.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <p className={cx('account')}>Account</p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPopper>
                        </div>
                    )}
                >
                    <div className={cx('search-block')}>
                        <input className={cx('search')} placeholder="Enter your keyword" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-button')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('login')}>
                    <buton>
                        <FontAwesomeIcon icon={faPlus} />
                        Upload
                    </buton>
                </div>
            </div>
        </header>
    );
}

export default Header;
