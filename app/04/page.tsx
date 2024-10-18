'use client';

import useSWR from 'swr';
import { fetcher, maybe } from '@/utils';
import { Button } from '@/components/btn';

// 04 optimistic updates

export default function Page() {
    const swr = useSWR('key', fetcher);
    return (
        <div>
            {swr.data}
            <Button
                onClick={async () => {
                    swr.mutate(maybe('fuck'), {
                        optimisticData: 'fuck',
                    });
                }}
            >
                mutate
            </Button>
        </div>
    );
}
