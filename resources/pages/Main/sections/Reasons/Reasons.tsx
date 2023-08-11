import React from "react"
import { SectionLayout } from "resources/shared/ui"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Reasons = () => {
    return <SectionLayout className="reasons">
        <div className="reasons__row">
            <div className="reasons__wrapper">
                <LazyLoadImage className="reasons__image" src="images/ideas/1.png" />
            </div>
            <p className="reasons__text">
                Cоздавая глэмпинг Атмосфера, мы хотели сделать отдых максимально теплым, мягким, нежным, добрым. Много было эскизов, дизайн-проектов, споров, переживаний, выездов на место… И стоя в одном, как выяснилось позже, удивительном месте, в рощице из нескольких берез, пришло понимание и концепция.
            </p>
        </div>
        <div className="reasons__row">
            <div className="reasons__wrapper">
                <LazyLoadImage className="reasons__image" src="images/ideas/2.png" />
            </div>
            <p className="reasons__text">
                Мы не станем здесь описывать это место, интересно получить ответ от вас, наших добрых гостей и почти друзей, где оно находится. Почему почти, потому что Вы только читаете и еще не приехали к нам, а тут то мы точно подружимся! У нас нет wi-fi, но это только плюс, Вы же сами много раз хотели уехать туда, где не придется доставать «случайно» взятый ноутбук. Не нужно ограничивать время в сети для детей, оно сократилось до нуля само.
            </p>
        </div>
        <p className="reasons__last">
            В такое место мы хотим Вас пригласить — место силы, пространство для перезагрузки, для единения с природой и философией духовного мира. Всё что Вы увидите и к чему прикоснетесь, сделано с душой и от чистого сердца, для каждого из нас.
        </p>
    </SectionLayout>
}