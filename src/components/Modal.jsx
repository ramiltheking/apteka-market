export function Modal({
  title,
  open,
  onClose,
  children,
  modalRef,
  handleBackdropClick,
  handleTouchStart,
  handleTouchEnd,
}) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div
        className="modal-content"
        ref={modalRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="modal-head">
          <h1>{title}</h1>
          <button onClick={onClose}>
            <img src="/icons/close.svg" alt="close" />
          </button>
        </div>
        <div className="modal-block">{children}</div>
        <button className="modal-save" onClick={onClose}>
          Сохранить
        </button>
      </div>
    </div>
  );
}
