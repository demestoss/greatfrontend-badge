import { type VariantProps, cva, cx } from 'class-variance-authority';
import type { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { type ButtonProps, buttonVariants } from './Button.tsx';

const iconButtonVariants = cva('', {
    variants: {
        size: {
            md: 'p-2.5',
            lg: 'p-3',
            xl: 'p-3.5',
            xxl: 'p-4 [&>svg]:size-6',
        },
    },
    compoundVariants: [
        {
            size: ['md', 'lg', 'xl'],
            class: '[&>svg]:size-5',
        },
    ],
    defaultVariants: {
        size: 'md',
    },
});

export type IconButtonProps = VariantProps<typeof iconButtonVariants> &
    ButtonProps & {
        'aria-label': string;
    };

export const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({
    children,
    type = 'button',
    intent,
    size,
    ...restProps
}) => {
    return (
        <button
            className={twMerge(
                cx(
                    iconButtonVariants({ size }),
                    buttonVariants({
                        intent,
                        ...restProps,
                    }),
                ),
            )}
            type={type}
            {...restProps}
        >
            {children}
        </button>
    );
};
