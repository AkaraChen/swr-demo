import { ok } from '@/utils';
import { NextPage } from 'next';
import useSWR from 'swr';

// 13 nextjs page with getInitialProps

const Page: NextPage<{
    data: string[];
}> = (props) => {
    const swr = useSWR('/', () => ok(['fetch', 'on', 'client']), {
        fallbackData: props.data,
    });
    return <p>{swr.data.join(' ')}</p>;
};

Page.getInitialProps = async () => {
    const data = await ok(['fetch', 'on', 'server']);
    return {
        data,
    };
};

export default Page;
