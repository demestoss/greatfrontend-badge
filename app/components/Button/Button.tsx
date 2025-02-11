import { type VariantProps, cva } from 'class-variance-authority';
import type { MouseEventHandler, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Slot } from '../Slot';

export const buttonVariants = cva(
    'flex justify-center items-center rounded font-medium',
    {
        variants: {
            intent: {
                primary: 'bg-indigo-700 text-white',
                secondary: 'bg-white text-neutral-900',
                tertiary: 'bg-transparent text-indigo-700',
                destructive: 'bg-red-600 text-white',
                linkColor: 'bg-transparent text-indigo-700',
                linkGray: 'bg-transparent text-neutral-600',
            },
            size: {
                md: 'px-3.5 py-2.5 gap-1 text-sm',
                lg: 'px-4 py-2.5 gap-1.5 text-base',
                xl: 'px-5 py-3 gap-1.5 text-base',
                xxl: 'px-6 py-4 gap-2.5 text-lg [&>svg]:size-6',
            },
            disabled: {
                true: 'text-neutral-400 bg-transparent',
                false: 'cursor-pointer',
            },
        },
        compoundVariants: [
            {
                intent: 'primary',
                disabled: false,
                class: 'hover:bg-indigo-800 focus:bg-indigo-800',
            },
            {
                intent: 'secondary',
                disabled: false,
                class: [
                    'shadow outline-[0.5px] outline-solid outline-neutral-200',
                    'hover:outline hover:shadow-sm hover:bg-neutral-50',
                    'focus:outline focus:bg-neutral-50',
                ],
            },
            {
                intent: 'tertiary',
                disabled: false,
                class: 'hover:bg-neutral-50',
            },
            {
                intent: 'linkColor',
                disabled: false,
                class: 'hover:text-indigo-800 focus:text-indigo-800',
            },
            {
                intent: 'linkGray',
                disabled: false,
                class: 'hover:text-neutral-900 focus:text-neutral-900',
            },
            {
                intent: [
                    'primary',
                    'secondary',
                    'tertiary',
                    'linkGray',
                    'linkColor',
                ],
                disabled: false,
                class: 'focus:ring-4 focus:ring-indigo-200',
            },
            {
                intent: 'destructive',
                disabled: false,
                class: [
                    'hover:bg-red-700',
                    'focus:bg-red-700 focus:ring-4 focus:ring-red-200',
                ],
            },
            {
                intent: ['secondary', 'primary'],
                disabled: true,
                class: 'bg-neutral-100',
            },
            {
                intent: ['linkGray', 'linkColor'],
                class: 'p-0',
            },
            {
                size: ['md', 'lg', 'xl'],
                class: '[&>svg]:size-5',
            },
        ],
        defaultVariants: {
            intent: 'primary',
            disabled: false,
        },
    },
);

export type ButtonBaseProps = {
    onClick?: MouseEventHandler;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    asChild?: boolean;
};

export type ButtonProps = VariantProps<typeof buttonVariants> & ButtonBaseProps;

export function Button({
    children,
    type = 'button',
    intent = 'primary',
    size = 'md',
    asChild,
    ...restProps
}: PropsWithChildren<ButtonProps>) {
    const Element = asChild ? Slot : 'button';
    return (
        <Element
            className={twMerge(
                buttonVariants({
                    intent,
                    size,
                    ...restProps,
                }),
            )}
            type={type}
            {...restProps}
        >
            {children}
        </Element>
    );
}
