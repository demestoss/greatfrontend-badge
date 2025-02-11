import { Link } from '@remix-run/react';
import { Button } from '../components/Button';

export default function Home() {
    return (
        <div className="w-60 flex flex-wrap items-center gap-6 py-[200px]">
            <Link to="/badge">
                <Button intent={'linkColor'}>Badge</Button>
            </Link>
            <Link to="/button">
                <Button intent={'linkColor'}>Button</Button>
            </Link>

            <a href="/storybook">
                <Button intent={'linkColor'}>Storybook</Button>
            </a>
        </div>
    );
}
