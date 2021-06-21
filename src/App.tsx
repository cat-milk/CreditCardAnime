import React from 'react';
import './index.css';
import './App.css';
import MainForm from './Components/MainForm';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ThanksOniChan from './Components/ThanksOnichan';

function App() {
    let swiperInstance:any;
    const handleCompleted = () =>{
        if(swiperInstance!=null){
            swiperInstance.slideNext();
        }
    }
    const handleRestart = () =>{
        if(swiperInstance!=null){
            console.log('bleh');
            swiperInstance.slidePrev();
        }
    }
    return (
        <div className="App w-full h-full min-h-screen">
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove={false}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => {swiperInstance=swiper;}}
            className="w-full h-full"
            >
                <SwiperSlide>
                    <MainForm handleCompleted={handleCompleted} />
                </SwiperSlide>
                <SwiperSlide>
                        <ThanksOniChan handleRestart={handleRestart} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;
