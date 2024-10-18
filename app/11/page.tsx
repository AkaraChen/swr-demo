import { ok } from '@/utils';
import Client from './client';

// 12 nextjs app router

export default async function Page() {
    const data = await ok(['fetch', 'on', 'server']);
    return <Client data={data} />;
}
