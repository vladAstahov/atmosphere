import React, { useEffect, useState } from "react"
import { SectionLayout, Button, Modal } from "resources/shared/ui"

export const Booking = () => {
    const [isVisible, setIsVisible] = useState(false)

    const bookingHandler = () => {
        setTimeout(() => {
            if (!document.getElementById('booking_iframe_iframe')) {
                // @ts-ignore
                var BookingIframe = new window.BookingIframe({
                    html_id: 'booking_iframe',
                    uid: '9f7745b4-4ca8-445d-8261-38d173a5150e',
                    lang: 'ru',
                    width: 'auto',
                    height: 'auto',
                    rooms: '',
                    IsMobile: '0',
                    scroll_to_rooms: '0'
                })
                BookingIframe._settings.insidePopup = 1
                console.log(BookingIframe)
                BookingIframe.init()
            }
        }, 50)
    }

    useEffect(() => {
        const script = document.createElement('script')
        script.setAttribute('src', 'https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js')
        script.setAttribute('async', 'true')
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return <SectionLayout className={`booking`}>
        <div className="booking__container">
            <div>
                <h3 className="booking__title">Бронирование номеров</h3>
                <p className="booking__description">Выберете домик, даты размещения  и количество гостей</p>
            </div>
            <Button className="booking__button" size="large" ariaLabel="Забронировать" onPress={() => setIsVisible(true)}>Забронировать</Button>
        </div>
        <Modal
            title=""
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
            onOpened={bookingHandler}
        >
            <div className="booking__modal">
                <div id="booking_iframe" className="booking__iframe" />
            </div>
        </Modal>
    </SectionLayout>
}