export const DialogModal = ({ isOpen, closeModal, children }) => {
  return (
    <dialog>
      <div>{children}</div>
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
};
