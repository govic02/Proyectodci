import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';

const useCustomStyles = (styles, theme) => {
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        if (!generatedClasses) {
            const evaluatedStyles = typeof styles === 'function' ? styles(theme) : styles;
            const generated = {};

            for (const key in evaluatedStyles) {
                generated[key] = css(evaluatedStyles[key]);
            }

            setClasses(generated);
        }
    }, [styles, theme, classes]);

    return classes;
};

export default useCustomStyles;