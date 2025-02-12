import appLogo from '../../public/abstractly.svg';
import { Button } from '../components/Button';
import {
    Navbar,
    NavbarItem,
    NavbarSection,
    NavbarSpacer,
} from '../components/Navbar';

export default function NavbarHeader() {
    return (
        <div>
            <AppHeader />
        </div>
    );
}

function AppHeader() {
    return (
        <div className="container">
            <Navbar>
                <AppHeaderLogo />
                <AppHeaderNavigation />
                <NavbarSpacer />
                <AppHeaderButtons />
            </Navbar>
        </div>
    );
}

function AppHeaderLogo() {
    return <img src={appLogo} alt="App Logo" className="w-28 h-8" />;
}

function AppHeaderNavigation() {
    return (
        <NavbarSection>
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
        <div className="flex gap-4">
            <Button size={'lg'} intent={'secondary'}>
                Learn more
            </Button>
            <Button size={'lg'} intent={'primary'}>
                See pricing
            </Button>
        </div>
    );
}
