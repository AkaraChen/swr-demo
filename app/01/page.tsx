'use client';

import useSWR from 'swr';
import { fetcher } from '../../utils';

// 01 simple

export default function Page() {
    const swr = useSWR('/', fetcher);
    if (swr.isLoading) {
        return <p>loading</p>;
    }
    if (swr.error) {
        return <p>error</p>;
    }
    return <p>{swr.data}</p>;
}
