import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
    render: ({ intent }) => (
        <div className="flex flex-wrap items-center gap-5">
            <Badge intent={intent} size={'sm'}>
                Label
            </Badge>
            <Badge intent={intent} size={'md'}>
                Label
            </Badge>
            <Badge intent={intent} size={'lg'}>
                Label
            </Badge>
        </div>
    ),
};

export const NeutralBadge: Story = {
    ...Template,
    args: {
        intent: 'neutral',
    },
};

export const CriticalBadge: Story = {
    ...Template,
    args: {
        intent: 'critical',
    },
};

export const WarningBadge: Story = {
    ...Template,
    args: {
        intent: 'warning',
    },
};

export const SuccessBadge: Story = {
    ...Template,
    args: {
        intent: 'success',
    },
};

export const InfoBadge: Story = {
    ...Template,
    args: {
        intent: 'info',
    },
};
