import { useState } from 'react';

export const useForceUpdate = () => {
    const [, set] = useState({});
    return () => set({});
};
