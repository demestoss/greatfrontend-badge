import { RiMenuLine } from '@remixicon/react';
import { IconButton } from '../ui/Button';

export function AppHeaderMenu() {
    return (
        <div className="flex xl:hidden">
            <IconButton
                size={'lg'}
                intent={'linkGray'}
                aria-label="Hamburger menu"
            >
                <RiMenuLine />
            </IconButton>
        </div>
    );
}
