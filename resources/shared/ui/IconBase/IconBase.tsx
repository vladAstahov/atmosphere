import React, { useMemo } from "react";
import { DefaultProps, IconName } from "../../types/helpers";

export type IconBaseProps = {
    name: IconName
} & DefaultProps

export const IconBase = React.memo<IconBaseProps>(({ name, className }) => {
    const classes = useMemo(() => [
        'icon-base',
        `icon-base--${name}`,
        className
    ].join(' '), [name, className])

    return <i className={classes}></i>
})