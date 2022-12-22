import styles from '../styles/Home.module.css'


type Props = {
    itemName: string
    itemCategory: string
    price: number
    bgColor: string
  }
  
  const CarouselItem = ({
    itemName,
    itemCategory,
    price,
    bgColor,
  }: Props) => {
    return (
      <section>
        <div className={styles.carouselItem}>
          <div className={styles.carouselimg} style={{ background: bgColor, color: bgColor}}>
            -
          </div>
          <span className={styles.price}>€ {price}</span>
          <span className={styles.itemname}>{itemName}</span><br></br>
          <span className={styles.itemcategory}>{itemCategory}</span><br></br>
        </div>
      </section>
    )
  }
  
  export default CarouselItem