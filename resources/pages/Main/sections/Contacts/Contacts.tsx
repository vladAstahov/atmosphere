import React from "react";
import {IconBase, SectionLayout} from "../../../../shared/ui";
import {useDevice} from "../../../../shared/lib/utils/default";

export const Contacts = () => {
    const { device } = useDevice()

    return <SectionLayout className='contacts' isWide={device.desktop}>
        {device.desktop ? (
            <span className='contacts__decoration'>Контакты</span>
        ) : (
            <h2 className='contacts__title'>Приезжайте <br/> к нам отдыхать</h2>
        )}
        <div className='contacts__container'>
            {device.desktop && (
                <div className='contacts__circle' />
            )}
            <div className='contacts__circle contacts__circle--map'>
                <div className='contacts__map'>
                    <a
                    href="https://yandex.ru/maps/org/atmosfera/82704129935/?utm_medium=mapframe&utm_source=maps"
                    className='contacts__link contacts__link--name'>Атмосфера</a>
                    <a
                    href="https://yandex.ru/maps/10904/novgorod-oblast/category/resort/184106400/?utm_medium=mapframe&utm_source=maps"
                    className='contacts__link contacts__link--description'>База, дом отдыха в Новгородской
                    области</a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/org/atmosfera/82704129935/?ll=33.011308%2C57.520928&z=17"
                        width="560" height="400" frameBorder="1"
                        className='contacts__iframe' />
                </div>
            </div>
            <div className='contacts__circle'>
                <div>
                    {device.desktop && (
                        <h2 className='contacts__title'>Приезжайте <br/> к нам отдыхать</h2>
                    )}
                    <a href='tel:+7 (926) 010-28-82' className='contacts__card'>
                        <div className='contacts__icon-wrapper'>
                            <IconBase className='contacts__icon' name={'placeholder'}/>
                        </div>
                        <span>+7 (926) 010-28-82</span>
                    </a>
                    <a href='mailto:hotel-atmosphere@yandex.ru' className='contacts__card'>
                        <div className='contacts__icon-wrapper'>
                            <IconBase className='contacts__icon' name={'placeholder'}/>
                        </div>
                        <span>hotel-atmosphere@yandex.ru</span>
                    </a>
                    <div className='contacts__card'>
                        <div className='contacts__icon-wrapper'>
                            <IconBase className='contacts__icon' name={'placeholder'}/>
                        </div>
                        <span>Лазурная ул., 1, д. Приозёрная</span>
                    </div>
                    <div className='contacts__card'>
                        <div className='contacts__icon-wrapper'>
                            <IconBase className='contacts__icon' name={'placeholder'}/>
                        </div>
                        <span>Круглосуточно</span>
                    </div>
                </div>
            </div>
            {device.desktop && (
                <div className='contacts__circle' />
            )}
        </div>
    </SectionLayout>
}