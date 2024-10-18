import { ComponentProps, FC } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {}

export const Button: FC<ButtonProps> = (props) => {
    const { className } = props;
    return (
        <button
            className={`px-3 py-2 shadow rounded border-zinc-200 border ${className}`}
            {...props}
        />
    );
};
