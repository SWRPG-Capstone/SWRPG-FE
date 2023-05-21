import { useEffect, useRef } from 'react';

export const DialogModal = ({ id, isOpen, closeModal, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  const preventClose = (e) => e.stopPropagation();

  return (
    <dialog id={id} className="dialog-modal" ref={ref} onCancel={closeModal} onClick={closeModal}>
      <section className="modal-content" onClick={preventClose}>
        {children}
        <button onClick={closeModal}>Close</button>
      </section>
    </dialog>
  );
};
