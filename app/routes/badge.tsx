import type { FC } from 'react';
import { Badge, type BadgeProps } from '../components/Badge';

export default function BadgesShowcase() {
    return (
        <div className="w-60 flex flex-wrap items-center gap-6 py-[200px]">
            <BadgesRow intent={'neutral'} />
            <BadgesRow intent={'critical'} />
            <BadgesRow intent={'warning'} />
            <BadgesRow intent={'success'} />
            <BadgesRow intent={'info'} />
        </div>
    );
}

const BadgesRow: FC<{ intent: BadgeProps['intent'] }> = ({ intent }) => (
    <>
        <Badge intent={intent} size={'sm'}>
            Label
        </Badge>
        <Badge intent={intent} size={'md'}>
            Label
        </Badge>
        <Badge intent={intent} size={'lg'}>
            Label
        </Badge>
    </>
);
