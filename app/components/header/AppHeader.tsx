import appLogo from '../../../public/abstractly.svg';
import { Button } from '../ui/Button';
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '../ui/Navbar';
import { AppHeaderMenu } from './AppHeaderMenu.tsx';

export function AppHeader() {
    return (
        <header className="flex justify-center w-full pt-4">
            <Navbar className="max-w-[1280px] px-8 h-[68px]">
                <AppHeaderLogo />
                <AppHeaderNavigation />
                <NavbarSpacer />
                <AppHeaderButtons />
                <AppHeaderMenu />
            </Navbar>
        </header>
    );
}

function AppHeaderLogo() {
    return <img src={appLogo} alt="App Logo" className="w-28 h-8" />;
}

function AppHeaderNavigation() {
    return (
        <NavbarSection className="hidden xl:flex">
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>Features</NavbarItem>
            <NavbarItem>Pricing</NavbarItem>
            <NavbarItem>About us</NavbarItem>
            <NavbarItem>Contacts</NavbarItem>
        </NavbarSection>
    );
}

function AppHeaderButtons() {
    return (
        <div className="hidden xl:flex gap-4">
            <Button size={'lg'} intent={'secondary'}>
                Learn more
            </Button>
            <Button size={'lg'} intent={'primary'}>
                See pricing
            </Button>
        </div>
    );
}
