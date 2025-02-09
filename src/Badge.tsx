import { cva, type VariantProps } from 'class-variance-authority'
import { FC, PropsWithChildren } from "react";

const badgeVariants = cva("inline-flex items-center rounded-full border border-solid border-neutral-200 font-normal text-center", {
    variants: {
        intent: {
            neutral: "bg-gray-50 border-neutral-200 text-neutral-600",
            critical: "bg-red-50 border-red-200 text-red-600",
            warning: "bg-amber-50 border-amber-200 text-amber-700",
            success: "bg-green-50 border-green-200 text-green-700",
            info: "bg-indigo-50 border-indigo-200 text-indigo-700",
        },
        size: {
            sm: "px-1.5 py-0.5 text-xs",
            md: "px-2 py-0.5 text-sm",
            lg: "px-2.5 py-1 text-sm"
        }
    },
    defaultVariants: {
        intent: "neutral",
        size: "md"
    }
});

type BadgeProps = VariantProps<typeof badgeVariants>;

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({ children, ...restProps }) => {
    return <div className={badgeVariants(restProps)}>{children}</div>
}