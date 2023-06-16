import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHandless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faHeart,
    faKeyboard,
    faMagnifyingGlass,
    faMoon,
    faPlus,
    faSignOut,
    faSpinner,
    faUser,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import image from '~/assets/images';
import avatar from '~/assets/images/avatar.jpeg';
import AccountItem from '~/components/AccountItem';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Images';

const cx = classNames.bind(style);

const list = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

const listCurrentUser = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        title: 'Favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },

    ...list,

    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Logout',
        line: true,
    },
];

function Header() {
    const [result, setResult] = useState([]);
    const currentId = true;

    useEffect(() => {
        setResult([]);
    }, []);

    const handleSelect = (item) => {
        switch (item.type) {
            case 'language':
                //handle
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img className={cx('logo-image')} src={image.logo} alt=""></img>
                </div>
                <TippyHandless
                    visible={result.length > 0}
                    interactive
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
                </TippyHandless>
                <div className={cx('action')}>
                    <Button outline className={cx('btn-upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>

                    {currentId ? (
                        <div className={cx('current-user')}>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <button className={cx('btn_user-upload')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentId ? listCurrentUser : list} onChange={handleSelect}>
                        {currentId ? (
                            <Image className={cx('avatar')} src={avatar} alt="avatar" />
                        ) : (
                            <button className={cx('btn-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
