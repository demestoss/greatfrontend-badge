import {
    Navbar,
    NavbarItem,
    NavbarLinkItem,
    NavbarSection,
    NavbarSpacer,
} from '../components/ui/Navbar';

export default function Home() {
    return (
        <div className="container flex flex-wrap items-center gap-6 py-[200px]">
            <Navbar>
                <NavbarSection>
                    <NavbarLinkItem to="/badge">Badge</NavbarLinkItem>
                    <NavbarLinkItem to="/button">Button</NavbarLinkItem>
                    <NavbarLinkItem to="/navbar">Navbar Header</NavbarLinkItem>
                </NavbarSection>

                <NavbarSpacer />

                <NavbarItem active asChild>
                    <a href="/greatfrontend-design-system/storybook">
                        Storybook
                    </a>
                </NavbarItem>
            </Navbar>
        </div>
    );
}
