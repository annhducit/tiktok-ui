import { useEffect, useState } from 'react';

function useDebounce(value, delay = 600) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}

export default useDebounce;
