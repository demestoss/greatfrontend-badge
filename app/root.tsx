import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

export default function Root() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="flex flex-col items-center h-screen">
                <Outlet />

                <Scripts />
            </body>
        </html>
    );
}

import favicon from '../public/favicon.ico';
import styles from './styles.css?url';

export const links: LinksFunction = () => [
    { rel: 'icon', type: 'image/png', href: favicon },
    {
        rel: 'stylesheet',
        href: styles,
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
    },
];

export const meta: MetaFunction = () => [
    {
        charSet: 'utf-8',
    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
    },
    {
        title: 'Design System | GreatFrontEnd Projects',
    },
];
