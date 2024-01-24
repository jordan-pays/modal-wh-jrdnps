import React from "react";
import "./Modal.css";

function Modal({
  isOpen,
  children,
  styleContainer,
  styleContent,
  renderClose,
  toggle,
}) {
  return (
    isOpen && (
      <div className="jrdnps-modal-container" style={{ ...styleContainer }}>
        <div className="jrdnps-modal-content" style={{ ...styleContent }}>
          {children}
          {renderClose ? (
            renderClose
          ) : (
            <div className="jrdnps-close-btn" onClick={toggle}>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default Modal;
