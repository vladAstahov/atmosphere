import React from "react"
import { SectionLayout } from "resources/shared/ui"

export const Ideas = () => {
    return <SectionLayout className="ideas">
        <span className="ideas__decoration">Идея</span>
        <h2 className="ideas__title">Идея глэмпинг-отеля Атмосфера родилась из трех важных для нас вещей:</h2>
        <div className="ideas__circles">
            <div className="ideas__circle">
                <p>Потребность <br /> быть ближе <br /> к первозданной <br /> природе</p>
            </div>
            <div className="ideas__circle">
                <p>Желание <br /> создать красивое <br /> и уютное любование <br /> прекрасными видами <br /> на озеро</p>
            </div>
            <div className="ideas__circle">
                <p>Необходимость быть <br /> чаще в месте силы <br /> для своего развития, <br /> а так же поделиться <br /> с единомышленниками</p>
            </div>
        </div>
    </SectionLayout>
}