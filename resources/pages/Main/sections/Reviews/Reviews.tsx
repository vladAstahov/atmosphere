import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useDevice } from "resources/shared/lib/utils/default"
import { SectionLayout } from "resources/shared/ui"

export const Reviews = () => {
    const { device } = useDevice()

    return <SectionLayout className="reviews" isWide={device.mobile}>
        <div className="reviews__container">
            <h2 className="reviews__title">Отзывы</h2>
            <LazyLoadImage className="reviews__image" src="images/reviews/decoration.png" />
            <div className="reviews__api">
                <iframe className="reviews__iframe" src="https://yandex.ru/maps-reviews-widget/115034443271?comments"></iframe>
                <a href="https://yandex.ru/maps/org/atmosfera/115034443271/" target="_blank" className="reviews__link">Атмосфера на карте Удмуртской Республики — Яндекс Карты</a>
            </div>
        </div>
    </SectionLayout>
}