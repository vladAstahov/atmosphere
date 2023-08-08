import React, { useCallback, useMemo, useState } from "react"
import { DefaultProps } from "resources/shared/types/helpers"

export type ButtonHamburgerProps = DefaultProps & {
    onPress: () => void
}

export const ButtonHamburger = React.memo<ButtonHamburgerProps>(({ className, onPress }) => {
    const [value, setValue] = useState(false)

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

    return <button aria-label="Меню" className={classes} onClick={onClick}>
        <span />
        <span />
        <span />
    </button>
})