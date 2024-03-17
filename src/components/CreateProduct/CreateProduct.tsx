import React from 'react'
import { useState } from 'react'
import { IProduct } from '../../models'
import axios from 'axios'
import { Error } from '../Error/Error';
import styles from './CreateProduct.module.css'

const generateRandomImageURL = (productId: number) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const imageURL = `https://picsum.photos/200/300?random=${productId}_${randomNumber}`;
    return imageURL;
  };
  
  // Example of adding a new product
  const newProductId = 1; // Assign a unique ID to the new product
  const newProductData: IProduct = {
    id: newProductId,
    title: 'New Product',
    price: 19.99,
    description: 'This is a new product',
    category: 'New Category',
    image: generateRandomImageURL(newProductId), // Generate unique image URL for the new product
    rating: {
      rate: 0,
      count: 0,
    },
  };

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export const CreateProduct = ({onCreate}: CreateProductProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        
        newProductData.title = value

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', {
            ...newProductData,
            title: value   
        })
        onCreate(response.data)
    }
    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

  return (
    <form onSubmit={submitHandler} action="">
        <input
            type="text" 
            className={styles.input}
            placeholder='Enter product name'
            value={value}
            onChange={changeHandler}
        />

        { error && <Error error={error}/>}

        <button type='submit' className={styles.button}>Create</button>
    </form>
  )
}
