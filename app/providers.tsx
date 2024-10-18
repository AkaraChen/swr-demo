'use client';

import { FC, PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';
import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Providers: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <QueryClientProvider client={useMemo(() => new QueryClient(), [])}>
            <SWRConfig>{children}</SWRConfig>
        </QueryClientProvider>
    );
};
