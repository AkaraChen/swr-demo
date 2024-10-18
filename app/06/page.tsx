'use client';

import useSWR from 'swr';
import { ok } from '@/utils';
import { Button } from '@/components/btn';
import { useState } from 'react';

// 06 pagination

export default function Page() {
    const [pg, setPg] = useState(0);
    const prev = () => setPg((p) => --p);
    const next = () => setPg((p) => ++p);
    const swr = useSWR(`pg=${pg}`, () => ok(pg));
    return (
        <div>
            {swr.data}
            <div>
                <Button onClick={next}>next</Button>
                <Button onClick={prev}>prev</Button>
            </div>
        </div>
    );
}
