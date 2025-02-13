import {
    Children,
    type PropsWithChildren,
    cloneElement,
    isValidElement,
} from 'react';

export function Slot({ children, ...restProps }: PropsWithChildren) {
    if (isValidElement(children)) {
        // WARN: Props collision
        const props = { ...restProps, ...(children.props as UnknownProps) };
        return cloneElement(children, props);
    }

    return Children.count(children) > 1 ? Children.only(null) : null;
}

type UnknownProps = Record<string, unknown>;
