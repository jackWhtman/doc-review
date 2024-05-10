import React from "react";
import "./index.css";

function ConfirmationModal({
  message,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="message">{message}</p>
        <div className="button-container">
          {confirmButtonText && (
            <button className="confirm-button" onClick={onConfirm}>
              {confirmButtonText}
            </button>
          )}
          {cancelButtonText && (
            <button className="cancel-button" onClick={onCancel}>
              {cancelButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
