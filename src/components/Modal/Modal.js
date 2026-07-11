import React from 'react'
import './Modal.scss'
import confirm from '../../img/icon-order-confirmed.svg'
import close from '../../img/icon-remove-item.svg'

const Modal = ({ cart, orderNumber, setModal, setCart, setCountCart, setTotalPrice }) => {

    const addToOrder = () => {
        setModal(false)
    }

    const closeModal = () => {
        setModal(false)
        setCart([])
        setCountCart(0)
        setTotalPrice(0)
    }

  return (
    <div className='ModalWrapper'>
        <div className='ModalWrapper__card'>
            <div className='ModalWrapper__card_navBlock'>
                <img src={confirm} className='ModalWrapper__card_navBlock_confirm'/>
                <img src={close} className='ModalWrapper__card_navBlock_close' onClick={addToOrder}/>
            </div>
            <div className='ModalWrapper__card_title'>Order №{orderNumber} Confirmed</div>
            <div className='ModalWrapper__card_text'>We hoop you enjou your food!</div>
            <div className='ModalWrapper__card_informBlock'>
                {cart.map((item) => ( 
                    <div className='ModalWrapper__card_informBlock_blockData'>
                        <img src={item.image} className='ModalWrapper__card_informBlock_blockData_imgItem'/>
                        <div className='ModalWrapper__card_informBlock_blockData_descrItem'>
                            <div>{item.name}</div>
                            <div>
                                <div>счетчик</div>
                                <div>${item.price}</div>
                            </div>
                        </div>
                        <div className='ModalWrapper__card_informBlock_blockData_price'>${item.price}</div>
                    </div>  
                ))}
            </div>
            <div className='ModalWrapper__card_button' onClick={closeModal}>Start New Order</div>
        </div>
    </div>
  )
}

export default Modal