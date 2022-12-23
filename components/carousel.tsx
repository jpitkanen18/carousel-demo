import styles from '../styles/Home.module.css'
import { bestOf, newArrivals, comingSoon } from '../pages/data/itemData'
import CarouselItem from '../components/carousel-item'
import React from 'react'

type Props = {
    carouselData: {
        active: boolean;
        title: string;
        items: {
            itemName: string;
            itemCategory: string;
            price: number;
            bgColor: string;
        }[];
    }[]
  }

  const Carousel = ({
   carouselData,
  }: Props) => {
    
    const [activeState, setActive] = React.useState(carouselData.map((item, i) => {
        return {active: item.active}
    }));

    const [scrollState, setScroll] = React.useState(carouselData.map((item, i) => {
        return {scroll: 0, pages: (item.items.length * 220)}
    }));

    const handleClick = (e) => {
        let key = e.target.getAttribute("data-key");
        activeState.forEach(state => {
            state.active = false
        });
        activeState[key].active = true
        setActive(activeState.map((item, i) => {
            return {active: item.active}
        }))
    }

    const handlePageForward = (e) =>{
        let key = e.target.getAttribute("data-key");
        let width = window.innerWidth
        let prevScroll = scrollState[key].scroll
        let newScroll = 0
        if (width > 1400) {
            width = 1400
        }
        if ((prevScroll + width) < scrollState[key].pages){
            newScroll = scrollState[key].scroll = prevScroll + width
        } else {
            newScroll = prevScroll
        }
        scrollState.forEach(state => {
            state.scroll = 0
        });
        scrollState[key].scroll = newScroll
        setScroll(scrollState.map((item, i) => {
            return {scroll: item.scroll, pages: item.pages}
        }))

    }


    const handlePageBackward= (e) =>{
        let key = e.target.getAttribute("data-key");
        let width = window.innerWidth
        let prevScroll = scrollState[key].scroll
        let newScroll = 0
        if (width > 1400) {
            width = 1400
        }
        
        if (prevScroll > width){
            console.log("Fired")
            newScroll = scrollState[key].scroll = prevScroll - width
        }
        scrollState.forEach(state => {
            state.scroll = 0
        });
        scrollState[key].scroll = newScroll
        setScroll(scrollState.map((item, i) => {
            return {scroll: item.scroll, pages: item.pages}
        }))
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.titles}>
                {carouselData.map((item, i) =>{
                    return(<h3 onClick={handleClick} key={i} data-key={i} className={activeState[i].active ? styles.carouselTitleActive : styles.carouselTitle}>{item.title}</h3>)
                })}
            </div>
                {carouselData.map((item, i) => {
                    return(
                        <div key={"item" + i} className={activeState[i].active ? styles.items : styles.itemshidden}>
                            <div className={styles.buttons}>
                                <button data-key={i} onClick={handlePageBackward} className={styles.button}>{"<"}</button>
                                <button data-key={i} onClick={handlePageForward} className={styles.button}>{">"}</button>
                            </div>
                        <div key={i} data-key={i}  className={activeState[i].active ? styles.carouselactive : styles.carousel} style={{transform: "translateX(-" + scrollState[i].scroll + "px)"}}>
                            {item.items.map((clown, i) => {
                                return(
                                    <CarouselItem 
                                    key={"item" + i}
                                    data-key={i}  
                                    itemName={clown.itemName}
                                    itemCategory={clown.itemCategory}
                                    price={clown.price}
                                    bgColor={clown.bgColor} />
                                )})}
                        </div>
                        </div>
                    )
                })}
            </div>
    )
}



export default Carousel

