'use client';

import { useForceUpdate } from '@/hooks/force';
import { fetcher } from '@/utils';
import { useEffect, useRef } from 'react';
import useSWR from 'swr';
import { useSWRConfig } from 'swr';

// 02 Basic

export default function Page() {
    useSWR('/', fetcher);
    const { cache } = useSWRConfig();
    const forceUpdate = useForceUpdate();
    // the cache is not reactive, so we need to force update to see cache store change...
    // this is just a demo, don't do this in production
    const timerRef = useRef<number>();
    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            forceUpdate();
        }, 1000);
        return () => {
            window.clearInterval(timerRef.current);
        };
    });
    // or use `~/hooks/cache-provider.ts` to create a custom cache provider, when cache store change, it will trigger re-render
    // it's not tested, we don't know how swr internally works, so use it at your own risk
    return <div>{Array.from(cache.keys())}</div>;
}
