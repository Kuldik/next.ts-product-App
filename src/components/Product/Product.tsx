import { IProduct } from "../../models"
import { useState } from "react"
import styles from './Product.module.css'
import Image from 'next/image';

interface ProductProps {
  product: IProduct
}

export const Product = ({product}: ProductProps) => {
  const [details, setDetails] = useState(false)

  return (
    <div className={styles.product}>
      <div 
        className={styles.container}
      >
        <Image src={product.image} alt={product.title} className={styles.image} width={500} height={300} />        
        <p className={styles.title}>{ product.title }</p>
        <span className={styles.span}>Price:</span> <p className={styles.text}>{ product.price }</p>
        <span className={styles.span}>Rating:</span> <span className={styles.text}>{ product.rating?.rate }</span>
        <button 
          className={styles.button}
          onClick={() => setDetails(prev => !prev)} 
          // Switching between true and false
        >
          {details ? "Hide Details" : "Show Details"}
        </button>
        {details && <div>
          <p>{ product.description } </p>
        </div>}
        
      </div>
    </div>
  )
}
