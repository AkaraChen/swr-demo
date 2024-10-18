'use client';

import useSWRInfinite from 'swr/infinite';
import { ok } from '@/utils';
import { Button } from '@/components/btn';

// 08 infinate query with max pages

export default function Page() {
    const swr = useSWRInfinite(
        (idx) => {
            if (idx > 3) {
                // or use a Symbol to indicate the error
                return new Error('max pages reached');
            }
            if (idx === 0) return `/usr?limit=10`;
            return `/usr?limit=10&offset=${idx * 10}`;
        },
        (key) => {
            if (key instanceof Error) {
                throw key;
            }
            return ok(key);
        },
        {
            onError(err) {
                // error will be handled automatically, but the code becomes more complex...
                console.error(err);
            },
        },
    );
    return (
        <div>
            {swr.data?.map((d, idx) => (
                <p key={d}>
                    {idx + 1}. {d}
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
