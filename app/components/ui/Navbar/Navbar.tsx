import { cx } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import { Button } from '../Button';

export function Navbar({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <nav
            className={cx(
                'bg-white flex flex-1 items-center gap-24 py-3',
                className,
            )}
        >
            {children}
        </nav>
    );
}

export function NavbarSection({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={cx('flex items-center shrink-0 gap-8', className)}>
            {children}
        </div>
    );
}

export function NavbarSpacer() {
    return <div className="flex-1" aria-hidden="true" />;
}

type NavbarItemProps = {
    asChild?: boolean;
    active?: boolean;
};

export function NavbarItem({
    children,
    active,
    asChild,
}: PropsWithChildren<NavbarItemProps>) {
    return (
        <Button
            intent={active ? 'linkColor' : 'linkGray'}
            size={'lg'}
            asChild={asChild}
        >
            {children}
        </Button>
    );
}
