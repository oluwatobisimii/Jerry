import React from 'react'
import ourLove from "../assets/images/gift.svg"

const GiftCover = () => {
    return (
        <section className="relative h-screen bg-[url('./assets/images/giftBg.png')]  bg-no-repeat bg-cover lg:bg-cover bg-[top_center] grid place-items-center" id="gift">
            <div className="absolute w-full h-full top-0 left-0 mix-blend-multiply bg-[#640000CC] z-0"></div>
            <img src={ourLove} alt="" className="relative z-10 scale-75 lg:scale-100" />
        </section>
    )
}

export default GiftCover