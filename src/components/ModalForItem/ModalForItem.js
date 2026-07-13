import React, { useState } from 'react'
import './ModalForItem.scss'
import increment from '../../img/icon-increment-quantity.svg'
import decrement from '../../img/icon-decrement-quantity.svg'
import close from '../../img/icon-remove-item.svg'
import { menu } from '../../data'

const ModalForItem = ({ 
    cart, 
    countItem, 
    selectedItem,

    setCountItem, 
    setModalForItem, 
    setCart, 
    setCountCart, 
    setTotalPrice
}) => {

    const [error, setError] = useState(false)

    const incr = () => {
        setCountItem(prev => prev + 1)
        setError(false)
    } 
    const decr = () => setCountItem(prev => prev - 1)
    const closeModal = () => setModalForItem(false)

    const addToCart = () => {
        setCart(prev => [
            ...prev,
            {
              ...selectedItem,
              count:countItem    
        }
        ])
        
        setCountCart(prev => prev + countItem)
        setCountItem(0)
        setTotalPrice(prev => prev + Number(countItem) * Number(selectedItem.price))
        setModalForItem(false)
    }

    const errorMess = () => {
        setError(true)
    }

  return (
    <div className='ModalForItem'>
        <div className='ModalForItem__card'>
                <>  
                    <div className='ModalForItem__card_close'>
                        <img src={close} onClick={closeModal}/>
                    </div>
                    <div className='ModalForItem__card_imgBlock'>
                        <img src={selectedItem.image}/>
                    </div>
                    <div className='ModalForItem__card_name'>{selectedItem.name}</div>
                    <div className='ModalForItem__card_descr'>{selectedItem.description}</div>
                    <div className='ModalForItem__card_cal'>{selectedItem.calories} Cal • P {selectedItem.protein} • C {selectedItem.carbs} • F {selectedItem.fat}</div>
                    <div className='ModalForItem__card_blockCount'>
                        <div className='ModalForItem__card_blockCount_blockForButton'>
                            {countItem !== 0 ? (
                                <>
                                    <div onClick={decr}>
                                        <img src={decrement}></img>
                                    </div>
                                    <div>{countItem}</div>
                                    <div onClick={incr}>
                                        <img src={increment}></img>
                                    </div>
                                </>
                            ) : (
                                 <>
                                    <div className='ModalForItem__card_blockCount_blockForButton_inactive'>
                                        <img src={decrement}></img>
                                    </div>
                                    <div>{countItem}</div>
                                    <div onClick={incr}>
                                        <img src={increment}></img>
                                    </div>
                                 </>  
                            )}
                        </div>
                    </div>
                    {error ? <div className='error'>Please select at least one item</div> : ''}
                    {countItem !== 0 ? (
                        <div className='ModalForItem__card_button' onClick={addToCart}>Confirm</div>
                    ) : (
                        <div className='ModalForItem__card_button' onClick={errorMess}>Confirm</div>
                    )}
                </>
            
        </div>
    </div>
  )
}

export default ModalForItem

/** <div onClick={decr}>
                                <img src={decrement}/>
                            </div>
                            <div>{countItem}</div>
                            <div onClick={incr}>
                                <img src={increment}/>
                            </div>*/