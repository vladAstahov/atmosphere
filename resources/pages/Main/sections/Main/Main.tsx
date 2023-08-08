import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDevice } from "resources/shared/lib/utils/default";
import { SectionLayout } from "resources/shared/ui";

export const Main = () => {
    const { device } = useDevice()

    return <SectionLayout className="main" isWide={device.mobile}>
        <h1 className="main__title">
            <span>Место, где</span> сердце и душа находят <span>свое</span> спокойствие
        </h1>
        <div className="main__wrapper">
            <LazyLoadImage className="main__image" src="images/main/image.png" />
        </div>
    </SectionLayout>
}