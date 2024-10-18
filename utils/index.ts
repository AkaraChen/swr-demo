import { delay } from '@std/async';

export const fetcher = async () => {
    await delay(1000);
    console.log('fetcher');
    return 'hello';
};

export const ok = async <T>(v: T) => {
    await delay(1000);
    console.log('ok with', v);
    return v;
};

export const maybe = async (res?: string) => {
    await delay(1000);
    console.log('maybe');
    if (Math.random() > 0.5) {
        throw new Error('maybe error');
    }
    return res ?? 'maybe';
};

export const invariant = (v: any, msg: string) => {
    if (!v) throw msg;
    return v;
};
