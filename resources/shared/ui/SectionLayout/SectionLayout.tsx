import React, { useMemo } from "react";
import { DefaultProps } from "resources/shared/types/helpers";

export type SectionLayoutProps = DefaultProps & React.PropsWithChildren & {
    isWide?: boolean
    containerClassname?: string
}

export const SectionLayout = React.memo<SectionLayoutProps>(({ className, children, isWide, containerClassname }) => {
    const classes = useMemo(() => [
        'section-layout',
        className,
        ...(isWide ? ['is-wide'] : [])
    ].join(' '), [className, isWide])

    return <section className={classes}>
        <div className={`section-layout__container ${containerClassname}`}>
            {children}
        </div>
    </section>
})