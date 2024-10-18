'use client';

import useSWR, { preload } from 'swr';
import { fetcher } from '../../utils';
import { FC, useEffect, useState } from 'react';

// 10 prefetch

preload('/', fetcher);

const Inner: FC = () => {
    const swr = useSWR('/', fetcher);
    if (!swr.data) {
        // even if the data is prefetched, the initial render will still have no data
        return <p>should not show</p>;
    }
    return <p>{swr.data}</p>;
};

export default function Page() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        if (!init) {
            const timer = window.setTimeout(() => {
                setInit(true);
            }, 1500);
            return () => {
                timer && clearTimeout(timer);
            };
        }
    }, []);
    return (
        <div>
            {init ? 'init' : 'loading'}
            {init && <Inner />}
        </div>
    );
}
