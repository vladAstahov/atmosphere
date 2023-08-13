import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { IconBase, SectionLayout } from "resources/shared/ui"

export const Certificate = () => {
    return <SectionLayout className="certificate">
        <div className="certificate__container">
            <span className="certificate__decoration">Сертификаты</span>
            <h2 className="certificate__title">Лучший подарок - качественный отдых</h2>
            <div className="certificate__wrapper">
                <div className="certificate__main">
                    <h3 className="certificate__subtitle">Кому можно подарить сертификат?</h3>
                    <div className="certificate__card">
                        <IconBase className="certificate__icon" name="placeholder" />
                        <p className="certificate__info">Молодоженам. Это будет поистине прекрасный подарок, единение с природой,единение двух любящих сердец на лоне великолепных видов.</p>
                    </div>
                    <div className="certificate__card">
                        <IconBase className="certificate__icon" name="placeholder" />
                        <p className="certificate__info">На день рождения друзьям, родственникам, коллегам по работе, учителю Вашего ребенка.</p>
                    </div>
                    <p className="certificate__text">Это только намеки, а в действительности, подарки любят все и ощутить заботу будет приятнокаждому. А получить особенный подарок, могут похвастаться только те, чьи близкие оченьвнимательны!Но мы тоже не оставим без внимания, по сертификату, Ваши близкие получат подарок и от нас.</p>
                </div>
                <LazyLoadImage className="certificate__image" src="images/certificate/decoration.svg" />
            </div>
        </div>
    </SectionLayout>
}