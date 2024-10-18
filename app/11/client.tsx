'use client';

import { ok } from '@/utils';
import useSWR from 'swr';

interface Props {
    data: string[];
}

export default function Client(props: Props) {
    const swr = useSWR('/', () => ok(['fetch', 'on', 'client']), {
        fallbackData: props.data,
    });
    if (!swr.data) {
        // have fallback data, so in first render, swr.data is always defined
        throw new Error('should not happen');
    }
    return <p>{swr.data.join(' ')}</p>;
}
