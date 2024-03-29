import React, { useEffect } from "react";
import "./Modal.css";

function Modal({
  isOpen,
  children,
  styleContainer,
  styleContent,
  renderClose,
  toggle,
  closeBtnLabel = "close modal"
}) {

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && isOpen) {
      toggle()
    }
  })


  return (
    isOpen && (
      <div className="jrdnps-modal-container" style={{ ...styleContainer }}>
        <div className="jrdnps-modal-content" style={{ ...styleContent }}>
          {children}
          {renderClose ? (
            renderClose
          ) : (
            <button type="button" aria-label={closeBtnLabel} tabIndex={0} className="jrdnps-close-btn" onClick={toggle}>
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default Modal;
