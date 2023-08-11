import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { DefaultProps } from "../../types/helpers";
import { ButtonIcon } from "resources/shared/ui/ButtonIcon";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDevice } from "resources/shared/lib/utils/default";

export type SliderProps = DefaultProps & {
    data: string[]
    text?: string[]
}

export const Slider = React.memo<SliderProps>(({ data, text, className }) => {
    const intialStep = text ? 0 : 1
    const [active, setActive] = useState(intialStep)
    const { device } = useDevice()

    const getItemStyles = useCallback((index: number) => {
        const classes = [
            'slider__item'
        ]
        if (index + 1 === active) {
            classes.push('is-active')
        }
        if (index === 0 && active === 0 && text && device.desktop) {
            classes.push('is-active')
        }

        return classes.join(' ')
    }, [active, text, device.desktop])

    const cardStyles = useMemo(() => {
        const classes = [
            'slider__card'
        ]
        if (active === 0) {
            classes.push('is-active')
        }

        return classes.join(' ')
    }, [active])

    const onNext = useCallback(() => {
        if (active !== data.length) {
            setActive(prevState => prevState + 1)
        } else {
            setActive(1)
        }
    }, [active, data])

    const onPrev = useCallback(() => {
        if (active !== intialStep) {
            setActive(prevState => prevState - 1)
        } else {
            setActive(data.length)
        }
    }, [active, data])

    return <div className={`slider ${className}`}>
        <ButtonIcon
            className="slider__button slider__button--prev"
            icon="chevron-left"
            onPress={onPrev}
        />
        {text && (
            <>
                <div className={cardStyles}>
                    {text.map((item, key) => (
                        <>
                            <p key={key}>{item}</p>
                            <br />
                        </>
                    ))}
                </div>
            </>
        )}
        <div className='slider__overlay' />
        {data.map((source, index) => (
            <LazyLoadImage key={index} src={source} className={getItemStyles(index)} />
        ))}
        <ButtonIcon
            className="slider__button slider__button--next"
            icon="chevron-right"
            onPress={onNext}
        />
    </div>
})