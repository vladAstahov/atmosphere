import React from "react"
import { DefaultProps, IconName } from "resources/shared/types/helpers"
import { IconBase } from "resources/shared/ui/IconBase"

export type InfoRowProps = DefaultProps & {
    icon: IconName,
    text: string,
    href?: string
}

export const InfoRow = React.memo<InfoRowProps>(({ icon, text, className, href }) => {
    return <Wrapper href={href} className={`info-row ${className}`}>
        <div className="info-row__wrapper">
            <IconBase className="info-row__icon" name={icon} />
        </div>
        <p className="info-row__text">{text}</p>
    </Wrapper>
})

const Wrapper = React.memo<Pick<InfoRowProps, 'href' | 'className'> & React.PropsWithChildren>(({ href, children, className }) => {
    if (href) {
        return <a className={className} href={href}>
            {children}
        </a>
    }

    return <div className={className}>
        {children}
    </div>
})