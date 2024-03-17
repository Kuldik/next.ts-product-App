import { Product } from '../../components/Product/Product';
import { useProducts } from '../../hooks/hook';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import { Modal } from '../../components/Modal/Modal';
import { CreateProduct } from '../../components/CreateProduct/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../../models';
import { ModalContext } from '../../context/ModalContext';
import styles from  './ProductPage.module.css';

const ProductPage = () => {
    const {products, loading, error, addProduct} = useProducts()
    const { modal, onOpen: openModal, onClose: closeModal } = useContext(ModalContext)
  
    const createHandler = (product: IProduct) => {
      closeModal()
      addProduct(product)
    }
  
   
    return (
      <div>
        {loading && <Loading/>}
        {error && <Error error={error}/> }
        {products.map(product => <Product product={product} key={product.id} />)}
        {modal && (
          <Modal title="Create new product" onClose={() => closeModal()}>
            <CreateProduct onCreate={createHandler}/>
          </Modal>
        )}
        
        <button className={styles.button} 
          onClick={() => openModal()}>
          +
        </button>
      </div>
    )
}

export default ProductPage
