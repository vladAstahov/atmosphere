import React from "react";
import { DefaultProps } from "resources/shared/types/helpers";
import { Modal, ModalProps, Slider } from "resources/shared/ui";

export type RoomModalProps = DefaultProps & ModalProps & {
    images: string[]
    text: string[]
}

export const RoomModal = React.memo<RoomModalProps>(({ images, text, ...props }) => {
    return <Modal {...props} className="room-modal">
        <div className="room-modal__wrapper">
            <Slider data={images} />
        </div>
        <div className="room-modal__card">
            {text.map((element) => (
                <>
                    <p>{element}</p>
                    <br />
                </>
            ))}
        </div>
    </Modal>
})