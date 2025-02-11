import { Link } from '@remix-run/react';
import { Button } from '../components/Button';

export default function Home() {
    return (
        <div className="w-60 flex flex-wrap items-center gap-6 py-[200px]">
            <Button intent={'linkColor'} asChild>
                <Link to="/badge">Badge</Link>
            </Button>

            <Button intent={'linkColor'} asChild>
                <Link to="/button">Button</Link>
            </Button>

            <Button intent={'linkColor'} asChild>
                <a href="/greatfrontend-design-system/storybook">Storybook</a>
            </Button>
        </div>
    );
}
