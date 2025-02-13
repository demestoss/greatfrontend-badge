import { RiStarLine } from '@remixicon/react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button.tsx';
import { IconButton } from './IconButton.tsx';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
    render: (props) => (
        <div className="flex flex-wrap items-center gap-5">
            <Button size={'md'} {...props}>
                Button CTA
            </Button>
            <Button size={'lg'} {...props}>
                <RiStarLine />
                Button CTA
            </Button>
            <Button size={'xl'} {...props}>
                Button CTA
                <RiStarLine />
            </Button>
            <Button size={'xxl'} {...props}>
                Button CTA
            </Button>
            <IconButton aria-label="Star CTA" size={'xxl'} {...props}>
                <RiStarLine />
            </IconButton>
        </div>
    ),
};

export const PrimaryButton: Story = {
    ...Template,
    args: {
        intent: 'primary',
    },
};

export const PrimaryDisabledButton: Story = {
    ...Template,
    args: {
        intent: 'primary',
        disabled: true,
    },
};

export const SecondaryButton: Story = {
    ...Template,
    args: {
        intent: 'secondary',
    },
};

export const SecondaryDisabledButton: Story = {
    ...Template,
    args: {
        intent: 'secondary',
        disabled: true,
    },
};

export const TertiaryButton: Story = {
    ...Template,
    args: {
        intent: 'tertiary',
    },
};

export const TertiaryDisabledButton: Story = {
    ...Template,
    args: {
        intent: 'tertiary',
        disabled: true,
    },
};

export const DestructiveButton: Story = {
    ...Template,
    args: {
        intent: 'destructive',
    },
};

export const DestructiveDisabledButton: Story = {
    ...Template,
    args: {
        intent: 'destructive',
        disabled: true,
    },
};

export const LinkColorButton: Story = {
    ...Template,
    args: {
        intent: 'linkColor',
    },
};

export const LinkColorDisabledButton: Story = {
    ...Template,
    args: {
        intent: 'linkColor',
        disabled: true,
    },
};

export const LinkGrayButton: Story = {
    ...Template,
    args: {
        intent: 'linkGray',
    },
};

export const LinkGrayDisabledButton: Story = {
    ...Template,
    args: {
        intent: 'linkGray',
        disabled: true,
    },
};
