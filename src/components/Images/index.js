import { forwardRef } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

import style from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...probs }, ref) => {
    const [_fallBack, setFallBack] = useState('');

    const handleImage = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            src={_fallBack || src}
            alt={alt}
            ref={ref}
            {...probs}
            onError={handleImage}
        />
    );
});

export default Image;
