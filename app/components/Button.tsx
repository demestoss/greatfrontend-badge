import { cva, type VariantProps } from 'class-variance-authority'
import {Children, FC, PropsWithChildren} from "react";

const buttonVariants = cva("flex justify-center items-center rounded font-medium", {
    variants: {
        intent: {
            primary: "bg-indigo-700 text-white",
            secondary: "bg-white text-neutral-900",
            tertiary: "",
            destructive: "",
            linkColor: "",
            linkGray: "",
        },
        size: {
            md: "px-3.5 py-2.5 gap-1 text-sm",
            lg: "px-4 py-2.5 gap-1.5 text-base",
            xl: "px-5 py-3 gap-1.5 text-base",
            xxl: "px-6 py-4 gap-2.5 text-lg"
        },
        disabled: {
            true: "text-neutral-400 bg-transparent",
            false: null
        },
        iconOnly: {
            false: null,
            true: null,
        }
    },
    compoundVariants: [
        {
            intent: "primary",
            disabled: false,
            class: "hover:bg-indigo-800 focus:bg-indigo-800",
        },
        {
            intent: "secondary",
            disabled: false,
            class: "shadow border-[0.5px] border-solid border-neutral-200 hover:border hover:shadow-lg focus:border",
        },
        {
            intent: "tertiary",
            disabled: false,
            class: "",
        },
        {
            intent: "destructive",
            disabled: false,
            class: "",
        },
        {
            intent: "linkColor",
            disabled: false,
            class: "",
        },
        {
            intent: "linkGray",
            disabled: false,
            class: "",
        },
        {
            intent: ["primary", "secondary", "tertiary", "linkGray", "linkColor"],
            disabled: false,
            class: "focus:ring-4 focus:ring-indigo-200",
        },
        {
            intent: ["secondary", "primary"],
            disabled: true,
            class: "bg-neutral-100",
        },
        {
            size: 'md',
            iconOnly: true,
            class: 'p-2.5'
        },
        {
            size: 'lg',
            iconOnly: true,
            class: 'p-3'
        },
        {
            size: 'xl',
            iconOnly: true,
            class: 'p-3.5'
        },
        {
            size: 'xxl',
            iconOnly: true,
            class: 'p-4'
        }
    ],
    defaultVariants: {
        intent: "primary",
        size: "md",
        disabled: false,
        iconOnly: false
    },
});

type ButtonProps = VariantProps<typeof buttonVariants>;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...restProps }) => {
    const hasText = Children.toArray(children).some(
        (child) => typeof child === 'string' && child.trim().length > 0
    );

    return <div className={buttonVariants(restProps)}>{children}</div>
}