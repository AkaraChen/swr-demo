'use client';

import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '@/utils';
import { Button } from '@/components/btn';
import { useForceUpdate } from '@/hooks/force';

// 05 optimistic update (cache)

export default function Page() {
    const swr = useSWR('key', fetcher);
    const { cache } = useSWRConfig();
    // set cache won't trigger update...
    const forceUpdate = useForceUpdate();
    return (
        <div>
            {swr.data}
            <Button
                onClick={async () => {
                    cache.set('key', {
                        data: 'fuck',
                    });
                    forceUpdate();
                }}
            >
                mutate
            </Button>
        </div>
    );
}
