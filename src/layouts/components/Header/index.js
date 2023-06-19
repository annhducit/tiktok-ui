import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faHeart,
    faKeyboard,
    faMoon,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import image from '~/assets/images';
import avatar from '~/assets/images/avatar.jpeg';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Images';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

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
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
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
    const currentId = true;

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
                    <Link to={config.router.home}>
                        <img className={cx('logo-image')} src={image.logo} alt=""></img>
                    </Link>
                </div>

                <Search />
                <div className={cx('action')}>
                    <Button outline className={cx('btn-upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>

                    {currentId ? (
                        <div className={cx('current-user')}>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
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
