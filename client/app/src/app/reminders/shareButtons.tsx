'use client'
import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import ShareModal from './shareModal'
export default function ShareButtons() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='flex space-x-5'>
      {openModal && 
        createPortal(<ShareModal setOpenModal={setOpenModal}/>, document.body)
      }
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
          <path d="M1.8252 13V14C1.8252 14.7956 2.14127 15.5587 2.70388 16.1213C3.26648 16.6839 4.02955 17 4.8252 17H14.8252C15.6208 17 16.3839 16.6839 16.9465 16.1213C17.5091 15.5587 17.8252 14.7956 17.8252 14V13M13.8252 9L9.8252 13M9.8252 13L5.8252 9M9.8252 13V1" stroke="#104938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button onClick={() => setOpenModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M9.50927 13.342C9.71127 12.938 9.82527 12.482 9.82527 12C9.82527 11.518 9.71127 11.062 9.50927 10.658M9.50927 13.342C9.20698 13.9464 8.70948 14.431 8.09737 14.7174C7.48526 15.0037 6.7944 15.075 6.13672 14.9197C5.47903 14.7644 4.89304 14.3916 4.47369 13.8617C4.05433 13.3317 3.82617 12.6758 3.82617 12C3.82617 11.3242 4.05433 10.6682 4.47369 10.1383C4.89304 9.60841 5.47903 9.2356 6.13672 9.08029C6.7944 8.92499 7.48526 8.99628 8.09737 9.28263C8.70948 9.56898 9.20698 10.0536 9.50927 10.658M9.50927 13.342L16.1413 16.658M9.50927 10.658L16.1413 7.34199M16.1413 16.658C15.7854 17.3698 15.7268 18.1939 15.9785 18.9489C16.2301 19.704 16.7714 20.3281 17.4833 20.684C18.1951 21.0399 19.0192 21.0985 19.7742 20.8468C20.5292 20.5951 21.1534 20.0538 21.5093 19.342C21.8652 18.6302 21.9238 17.8061 21.6721 17.0511C21.4204 16.296 20.8791 15.6719 20.1673 15.316C19.8148 15.1398 19.4311 15.0347 19.038 15.0067C18.6449 14.9788 18.2502 15.0286 17.8763 15.1532C17.1213 15.4049 16.4972 15.9462 16.1413 16.658ZM16.1413 7.34199C16.3175 7.69439 16.5614 8.00863 16.8591 8.26677C17.1568 8.5249 17.5024 8.72188 17.8762 8.84645C18.25 8.97102 18.6447 9.02074 19.0377 8.99278C19.4307 8.96482 19.8144 8.85973 20.1668 8.68349C20.5192 8.50726 20.8334 8.26334 21.0916 7.96566C21.3497 7.66798 21.5467 7.32238 21.6712 6.94858C21.7958 6.57477 21.8455 6.1801 21.8176 5.78708C21.7896 5.39406 21.6845 5.01039 21.5083 4.65799C21.1524 3.94628 20.5283 3.40511 19.7734 3.15353C19.0184 2.90195 18.1945 2.96057 17.4828 3.31649C16.7711 3.67241 16.2299 4.29648 15.9783 5.05141C15.7267 5.80634 15.7854 6.63028 16.1413 7.34199Z" stroke="#104938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
