'use client';

import { useDelayInit } from '@/hooks/delay-init';
import { ok } from '@/utils';
import useSWR, { preload } from 'swr';

preload('/', () => ok(['fetch', 'on', 'preload']));

function Inner() {
    const swr = useSWR('/', () => ok(['fetch', 'on', 'client']), {});
    if (!swr.data) {
        // have fallback data, so in first render, swr.data is always defined
        return <p>preloaded, should not happen</p>;
    }
    return <p>{swr.data.join(' ')}</p>;
}

export default function Client() {
    const init = useDelayInit(1500);
    return init ? <Inner /> : <p>loading</p>;
}
