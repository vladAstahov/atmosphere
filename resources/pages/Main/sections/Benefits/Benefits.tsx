import React from "react"
import { IconName } from "resources/shared/types/helpers"
import { IconBase, SectionLayout } from "resources/shared/ui"

const data: {
    title: string,
    icon: IconName
}[] = [
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        }
    ]

export const Benefits = () => {
    return <SectionLayout className="benefits">
        <div className="benefits__container">
            <div className="benefits__wrapper">
                {data.map((element, key) => (
                    <div className="benefits__card" key={key}>
                        <IconBase className="benefits__icon" name={element.icon} />
                        <p className="benefits__text">{element.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </SectionLayout>
}