import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sassfiles/carousel_2.sass";
import React from 'react'
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoIosArrowForward } from 'react-icons/io';

function Carousel() {
    const array = [`Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.` , `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`, `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`, `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`, `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`]
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,}
    return (

        <div className="body">
            <div className="slider">
                <Slider {...settings}>
                    {array.map((item) => (
                        <div className="crd" id="card" >
                            <p>{item}</p>
                            <img src="https://logospng.org/download/react/logo-react-512.png" alt="user" id="img" />
                            <h6> jordan</h6>
                            <span>Ceo</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel
