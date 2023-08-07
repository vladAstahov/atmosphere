import React, { useMemo } from "react";
import { DefaultProps } from "../../types/helpers";

export type ButtonProps = DefaultProps & React.PropsWithChildren & {
    view?: 'primary' | 'secondary'
    size?: 'large' | 'medium'
    disabled?: boolean
    ariaLabel: string
    onPress: () => void
}

export const Button = React.memo<ButtonProps>(({ view = 'primary', size = 'medium', disabled = false, children, onPress, className }) => {
    const classes = useMemo(() => [
        'button',
        `button--view-${view}`,
        `button--size-${size}`,
        ...(disabled ? [
            'is-disabled'
        ] : []),
        className
    ].join(' '), [view, size, disabled])

    return <button className={classes} disabled={disabled} onClick={onPress}>
        <span className="button__content">{children}</span>
    </button>
})