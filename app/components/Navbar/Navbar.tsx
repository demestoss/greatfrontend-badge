import type { PropsWithChildren } from 'react';
import { Button } from '../Button';

export function Navbar({ children }: PropsWithChildren) {
    return (
        <nav className="bg-white flex flex-1 items-center gap-24 py-3">
            {children}
        </nav>
    );
}

export function NavbarSection({ children }: PropsWithChildren) {
    return <div className="flex items-center shrink-0 gap-8">{children}</div>;
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
            size={'md'}
            asChild={asChild}
        >
            {children}
        </Button>
    );
}
