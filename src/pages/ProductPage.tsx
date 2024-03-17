import { Product } from '../components/Product';
import { useProducts } from '../hooks/hook';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';
export const ProductPage = () => {
    const {products, loading, error, addProduct} = useProducts()
    const { modal, onOpen: openModal, onClose: closeModal } = useContext(ModalContext)
  
    const createHandler = (product: IProduct) => {
      closeModal()
      addProduct(product)
    }
  
   
    return (
      <div className='container mx-auto grid grid-rows-2 grid-cols-2 gap-4 md:grid-rows-1 md:grid-cols-1 max-w-2xl pt-5 bg-gradient-to-r from-blue-300 to-red-300'>
        {loading && <Loading/>}
        {error && <Error error={error}/> }
        {products.map(product => <Product product={product} key={product.id} />)}
        {modal && (
          <Modal title="Create new product" onClose={() => closeModal()}>
            <CreateProduct onCreate={createHandler}/>
          </Modal>
        )}
        
        <button className='fixed  bottom-5 right-5 rounded-full text-red bg-gradient-to-r mb-2 from-red-300 to-blue-400 hover:from-green-600 hover:to-blue-400 transition-all duration-300 ease-in hover:text-purple-900 hover:border-yellow-500 hover:bg-yellow-400 outline-none rounded-ss-[40px] rounded-se-[0px] rounded-ee-[40px] rounded-es-[0px] hover:rounded-es-[40px] hover:rounded-se-[40px] hover:rounded-ss-[0px] ease px-4 py-3' 
          onClick={() => openModal()}>
          +
        </button>
      </div>
    )
}
