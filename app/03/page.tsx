'use client';

import useSWR from 'swr';
import { fetcher } from '@/utils';
import { Button } from '@/components/btn';

// 03 auto refetching, polling, real-time

export default function Page() {
    const swr = useSWR('key', fetcher, {
        refreshInterval: 100,
    });
    return (
        <div>
            {swr.data}
            <Button
                onClick={() => {
                    swr.mutate('fuck', {
                        revalidate: false,
                    });
                }}
            >
                mutate
            </Button>
        </div>
    );
}
