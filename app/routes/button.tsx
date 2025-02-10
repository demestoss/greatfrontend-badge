import { RiStarLine } from '@remixicon/react';
import type { FC } from 'react';
import { Button, type ButtonProps } from '../components/Button.tsx';

export default function ButtonsShowcase() {
    return (
        <div className="flex flex-col gap-12 py-[112px]">
            <ButtonsRow intent={'primary'} />
            <ButtonsRow intent={'secondary'} />
            <ButtonsRow intent={'tertiary'} />
            <ButtonsRow intent={'linkColor'} />
            <ButtonsRow intent={'linkGray'} />
            <ButtonsRow intent={'destructive'} />
        </div>
    );
}

const ButtonsRow: FC<{ intent: ButtonProps['intent'] }> = ({ intent }) => (
    <div className="flex flex-wrap items-center gap-5">
        <Button size={'md'} intent={intent}>
            Button CTA
        </Button>
        <Button size={'lg'} intent={intent}>
            <RiStarLine />
            Button CTA
        </Button>
        <Button size={'xl'} intent={intent}>
            Button CTA
            <RiStarLine />
        </Button>
        <Button size={'xxl'} intent={intent}>
            Button CTA
        </Button>
        <Button size={'xxl'} intent={intent} aria-label="Star">
            <RiStarLine />
        </Button>
    </div>
);
