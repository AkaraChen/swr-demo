import { useSyncExternalStore } from 'react';

export class CustomCacheProvider extends Map {
    onGet?: (key: string, value: unknown) => void;
    onSet!: (key: string, value: string) => void;

    get(key: string) {
        const value = super.get(key);
        this?.onGet?.(key, value);
        return value;
    }

    set(key: string, value: unknown) {
        this.onSet(key, value as string);
        return super.set(key, value);
    }
}

export const useCacheProvider = () => {
    const cache = new CustomCacheProvider();
    return useSyncExternalStore(
        function (onStoreChange) {
            cache.onSet = onStoreChange;
            // global store, maybe cleanup is not needed
            return () => {};
        },
        () => cache,
    );
};
