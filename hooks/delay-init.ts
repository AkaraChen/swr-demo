import { useEffect, useState } from 'react';

export const useDelayInit = (delay = 1000) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        if (!init) {
            const timer = window.setTimeout(() => {
                setInit(true);
            }, delay);
            return () => {
                timer && clearTimeout(timer);
            };
        }
    }, []);
    return init;
};
