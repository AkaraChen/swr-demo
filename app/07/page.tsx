'use client';

import useSWRInfinite from 'swr/infinite';
import { ok } from '@/utils';
import { Button } from '@/components/btn';

// 07 load more & infinite scroll

export default function Page() {
    const swr = useSWRInfinite(
        (idx) => {
            if (idx === 0) return `/usr?limit=10`;
            return `/usr?limit=10&offset=${idx * 10}`;
        },
        (key) => ok(key),
    );
    return (
        <div>
            {swr.data?.map((d, idx) => (
                <p key={d}>
                    {idx}. {d}
                </p>
            ))}
            <div>
                <Button
                    onClick={() => {
                        swr.setSize(swr.size + 1);
                    }}
                >
                    load more
                </Button>
            </div>
        </div>
    );
}
