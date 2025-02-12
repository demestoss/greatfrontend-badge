import { Link, useMatch } from '@remix-run/react';
import type { PropsWithChildren } from 'react';
import { NavbarItem } from './Navbar';

type NavbarLinkItemProps = {
    to: string;
};

// WARN: Remix specific staff, should be on the app side, not in design system
export function NavbarLinkItem({
    to,
    children,
}: PropsWithChildren<NavbarLinkItemProps>) {
    const match = useMatch(to);
    return (
        <NavbarItem active={!!match} asChild>
            <Link to={to}>{children}</Link>
        </NavbarItem>
    );
}
