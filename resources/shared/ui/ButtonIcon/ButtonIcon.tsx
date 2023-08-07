import React, { useMemo } from "react"
import { DefaultProps, IconName } from "../../types/helpers"
import { IconBase } from "../IconBase/IconBase"

export type ButtonIconProps = {
    icon: IconName
    disabled?: boolean
    onPress: () => void
} & DefaultProps

export const ButtonIcon = React.memo<ButtonIconProps>(({ icon, disabled, onPress, className }) => {
    const classes = useMemo(() => [
        'button-icon',
        ...(disabled ? [
            'is-disabled'
        ] : []),
        className
    ].join(' '), [disabled, className])

    return <button className={classes} disabled={disabled} onClick={onPress} >
        <IconBase className="button-icon__icon" name={icon} />
    </button>
})