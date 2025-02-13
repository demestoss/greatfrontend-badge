import { type VariantProps, cva, cx } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Slot } from '../Slot';
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

export function IconButton({
    children,
    type = 'button',
    intent = 'primary',
    size = 'md',
    asChild,
    className,
    ...restProps
}: PropsWithChildren<IconButtonProps>) {
    const Element = asChild ? Slot : 'button';
    return (
        <Element
            className={twMerge(
                cx(
                    iconButtonVariants({ size }),
                    buttonVariants({
                        intent,
                        className,
                        ...restProps,
                    }),
                ),
            )}
            type={type}
            {...restProps}
        >
            {children}
        </Element>
    );
}
