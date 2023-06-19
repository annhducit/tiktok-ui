import TippyHandless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmarkCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

import AccountItem from '~/components/AccountItem';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import style from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);
function Search() {
    const [result, setResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [hide, setHide] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    async function getData(url) {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        setResult(data.data);
    }
    useEffect(() => {
        if (!debounce.trim()) {
            setResult([]);
            return;
        }
        getData(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);

    return (
        <TippyHandless
            interactive
            visible={hide && result.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        <p className={cx('account')}>Accounts</p>
                        {result.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </WrapperPopper>
                </div>
            )}
            onClickOutside={() => {
                setHide(false);
            }}
        >
            <div className={cx('search-block')}>
                <input
                    className={cx('search')}
                    placeholder="Enter your keyword"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        setHide(true);
                    }}
                    ref={inputRef}
                    onFocus={() => setHide(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            setHide(true);
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-button')}>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHandless>
    );
}

export default Search;
