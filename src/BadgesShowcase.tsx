import { Badge } from "./Badge.tsx";

export const BadgesShowcase = () => {
    return <div className="w-60 flex flex-wrap items-center gap-6">
        <Badge intent={'neutral'} size={'sm'}>Label</Badge>
        <Badge intent={'neutral'} size={'md'}>Label</Badge>
        <Badge intent={'neutral'} size={'lg'}>Label</Badge>

        <Badge intent={'critical'} size={'sm'}>Label</Badge>
        <Badge intent={'critical'} size={'md'}>Label</Badge>
        <Badge intent={'critical'} size={'lg'}>Label</Badge>

        <Badge intent={'warning'} size={'sm'}>Label</Badge>
        <Badge intent={'warning'} size={'md'}>Label</Badge>
        <Badge intent={'warning'} size={'lg'}>Label</Badge>

        <Badge intent={'success'} size={'sm'}>Label</Badge>
        <Badge intent={'success'} size={'md'}>Label</Badge>
        <Badge intent={'success'} size={'lg'}>Label</Badge>

        <Badge intent={'info'} size={'sm'}>Label</Badge>
        <Badge intent={'info'} size={'md'}>Label</Badge>
        <Badge intent={'info'} size={'lg'}>Label</Badge>
    </div>
}