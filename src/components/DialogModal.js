import { useEffect, useRef } from 'react';

export const DialogModal = ({ isOpen, closeModal, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={ref} onClick={closeModal}>
      <div>{children}</div>
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
};
