import React from 'react'
import './Modal.css'

function Modal({ isOpen, children, styleContainer, styleContent, renderClose, toggle }) {
	return (
		<div className='modal-container' style={{ ...styleContainer }}>
			<div className='modal-wrapper'>
				<div className='modal-close-btn'>
					{renderClose ? renderClose : <div className='close-btn' onClick={toggle}>x</div>}
				</div>
				<div className='modal-content' style={{ ...styleContent }}>
					{children}
				</div>
			</div>

		</div>
	)
}

export default Modal