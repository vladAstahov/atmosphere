import React, { useState, useEffect } from "react"
import { useScrollDisable } from "resources/shared/lib/utils/default/useScollDisable"
import { DefaultProps } from "resources/shared/types/helpers"
import { ButtonIcon } from "resources/shared/ui/ButtonIcon"

export type ModalProps = React.PropsWithChildren & DefaultProps & {
    title: string
    isVisible: boolean,
    onClose: () => void
}

// @ts-ignore
let timeout

export const Modal = React.memo<ModalProps>(({ title, isVisible, onClose, children, className }) => {
    const [isAnimation, setIsAnimation] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const { blockScroll, allowScroll } = useScrollDisable()
    useEffect(() => {
        if (isVisible) {
            setIsShow(true)
            blockScroll()
            timeout = setTimeout(() => {
                setIsAnimation(true)
            }, 100)
        } else {
            setIsAnimation(false)
            allowScroll()
            timeout = setTimeout(() => {
                setIsShow(false)
            }, 300)
        }

        return () => {
            // @ts-ignore
            clearTimeout(timeout)
        }
    }, [isVisible])


    return <div>
        {isShow && (
            <div
                className={`modal ${isAnimation && 'is-active'} ${className}`}>
                <div
                    className={`modal__wrapper ${isAnimation && 'is-active'}`}>
                    <p className="modal__title">{title}</p>
                    <ButtonIcon className="modal__button" icon="close" onPress={onClose} />
                    <div className="modal__children">
                        {children}
                    </div>
                </div>
            </div>
        )}
    </div>
})