'use client';

import { Button } from '@/components/btn';
import useSWR from 'swr';
import { fetcher } from '../utils';

export default function Home() {
    const swr = useSWR('key', fetcher, {});
    return (
        <div>
            <section className="h-32">{swr.data}</section>
            <hr />
            <Button
                onClick={() => {
                    swr.mutate('fuck', {
                        optimisticData: 'shabi',
                        revalidate: false,
                    });
                }}
            >
                mutate
            </Button>
        </div>
    );
}
