'use client';

import useSWR, { SWRConfig } from 'swr';

// 09 default query function

const Inner = () => {
    const swr = useSWR('https://jsonplaceholder.typicode.com/todos/1');
    return <p>{JSON.stringify(swr.data, null, 4)}</p>;
};

export default function Page() {
    return (
        <SWRConfig
            value={{ fetcher: (key) => fetch(key).then((res) => res.json()) }}
        >
            <Inner />
        </SWRConfig>
    );
}
