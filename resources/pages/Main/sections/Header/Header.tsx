import React, { useState } from "react";
import { DefaultProps } from "resources/shared/types/helpers";
import { Button, ButtonHamburger, Divider, InfoRow } from "resources/shared/ui";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDevice } from "resources/shared/lib/utils/default";

export const Header = React.memo<DefaultProps>(({ className }) => {
    const [isMenu, setIsMenu] = useState(false)
    const { device } = useDevice()

    return <header className={`header ${isMenu && 'is-menu'}`}>
        <div className="header__container">
            <div className="header__wrapper">
                <Button
                    view="secondary"
                    ariaLabel="Аренда"
                    size="medium"
                    onPress={() => { }}>
                    Аренда
                </Button>
                <LazyLoadImage className="header__image" src="images/logo.svg" alt="logo" />
                <ButtonHamburger onPress={() => setIsMenu(prevState => !prevState)} />
            </div>
            <div className="header__menu">
                <a className="header__link" onClick={() => { }}>О глэмпинге</a>
                <a className="header__link" onClick={() => { }}>Домики</a>
                <a className="header__link" onClick={() => { }}>Подарочный сертификат</a>
                <a className="header__link" onClick={() => { }}>Отзывы</a>
                <a className="header__link" onClick={() => { }}>Контакты</a>
                {device.mobile && (
                    <>
                        <Divider className="header__divider" />
                        <InfoRow className="header__info" icon="placeholder" text="+7 (926) 010-28-82" />
                        <InfoRow className="header__info" icon="placeholder" text="hotel-atmosphere@yandex.ru" />
                        <InfoRow className="header__info" icon="placeholder" text="Лазурная ул., 1, д. Приозёрная" />
                        <InfoRow className="header__info" icon="placeholder" text="Круглосуточно" />
                    </>
                )}
            </div>
        </div>
    </header>
})