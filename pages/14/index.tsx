import { useDelayInit } from '@/hooks/delay-init';
import { ok } from '@/utils';
import useSWR, { preload } from 'swr';

// 14 nextjs page with preload

const Inner = () => {
    const swr = useSWR('/', () => ok(['fetch', 'on', 'client']));
    if (!swr.data) {
        // preloaded, so this screen should not shown so long
        return <p>preloaded, should not happen</p>;
    }
    return <p>{swr.data.join(' ')}</p>;
};

preload('/', () => ok(['fetch', 'on', 'preload']));

const Page = () => {
    const init = useDelayInit(1500);
    return init ? <Inner /> : <p>loading</p>;
};

export default Page;
