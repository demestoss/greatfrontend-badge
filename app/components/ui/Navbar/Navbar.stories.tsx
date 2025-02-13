import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from './Navbar';

const meta = {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNavbar: Story = {
    render: () => (
        <div className="contianer flex items-center gap-6 py-[200px]">
            <Navbar>
                <NavbarSection>
                    <NavbarItem>Badge</NavbarItem>
                    <NavbarItem>Button</NavbarItem>
                    <NavbarItem>Navbar Header</NavbarItem>
                </NavbarSection>

                <NavbarSpacer />

                <NavbarItem active asChild>
                    <a href="https://github.com/demestoss">Storybook</a>
                </NavbarItem>
            </Navbar>
        </div>
    ),
};
