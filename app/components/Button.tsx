import { type VariantProps, cva } from 'class-variance-authority';
import {
    Children,
    type FC,
    type MouseEventHandler,
    type PropsWithChildren,
} from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
    'flex justify-center items-center rounded font-medium [&>svg]:w-5 [&>svg]:h-5',
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
                xxl: 'px-6 py-4 gap-2.5 text-lg [&>svg]:w-6 [&>svg]:h-6',
            },
            disabled: {
                true: 'text-neutral-400 bg-transparent',
                false: 'cursor-pointer',
            },
            iconOnly: {
                false: null,
                true: null,
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
                    'shadow border-[0.5px] border-solid border-neutral-200',
                    'hover:border hover:shadow-sm hover:bg-neutral-50',
                    'focus:border focus:bg-neutral-50',
                ],
            },
            {
                intent: 'tertiary',
                disabled: false,
                class: 'hover:bg-neutral-50',
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
                intent: 'linkColor',
                disabled: false,
                class: 'hover:text-indigo-800 focus:text-neutral-900',
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
                intent: ['secondary', 'primary'],
                disabled: true,
                class: 'bg-neutral-100',
            },
            {
                size: 'md',
                iconOnly: true,
                class: 'p-2.5',
            },
            {
                size: 'lg',
                iconOnly: true,
                class: 'p-3',
            },
            {
                size: 'xl',
                iconOnly: true,
                class: 'p-3.5',
            },
            {
                size: 'xxl',
                iconOnly: true,
                class: 'p-4',
            },
            {
                size: ['xxl', 'xl', 'lg', 'md'],
                intent: ['linkGray', 'linkColor'],
                iconOnly: [true, false],
                class: 'p-0',
            },
        ],
        defaultVariants: {
            intent: 'primary',
            size: 'md',
            disabled: false,
            iconOnly: false,
        },
    },
);

export type ButtonProps = Omit<
    VariantProps<typeof buttonVariants>,
    'iconOnly'
> & {
    onClick?: MouseEventHandler;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    'aria-label'?: string;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    type = 'button',
    intent,
    size,
    ...restProps
}) => {
    const hasText = Children.toArray(children).some(
        (child) => typeof child === 'string' && child.trim().length > 0,
    );

    return (
        <button
            className={twMerge(
                buttonVariants({
                    intent,
                    iconOnly: !hasText,
                    size,
                    ...restProps,
                }),
            )}
            type={type}
            {...restProps}
        >
            {children}
        </button>
    );
};
