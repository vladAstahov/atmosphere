import React, { useCallback, useMemo, useState } from "react"
import { DefaultProps } from "resources/shared/types/helpers"

export type ButtonHamburgerProps = DefaultProps & {
    onPress: () => void
}

export const ButtonHamburger = React.memo<ButtonHamburgerProps>(({ className, onPress }) => {
    const [value, setValue] = useState(true)

    const classes = useMemo(() => [
        'button-hamburger',
        ...(value ? [
            'is-active'
        ] : []),
        className
    ].join(' '), [value, className])

    const onClick = useCallback(() => {
        setValue(prevState => !prevState)
        onPress()
    }, [setValue, onPress])

    return <button className={classes} onClick={onClick}>
        <span />
        <span />
        <span />
    </button>
})