import React, { useRef, useEffect } from "react";
import { FaSnapchat } from "react-icons/fa6";
import SocialButtons from "./SocialButtons";
function Modal({ isVisible, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // Open the modal when the component mounts
    if (modalRef.current && isVisible) {
      modalRef.current.showModal();
    }
  }, [isVisible]);

  if (!isVisible) return null;
  const closeModal = () => {
    // Close the modal when the "X" button is clicked
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  return (
    <>
      <dialog id="my_modal_4" className="modal text-white" ref={modalRef}>
        <div className="flex-center flex-col gap-6 h-96 modal-box bg-white text-black w-11/12 md:w-96">
          {/* <form method="dialog"> */}
            {/* <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button> */}
          {/* </form> */}
          <div className="text-center">
            <h3 className="font-bold text-2xl">Confirm and Support!</h3>
            <p className="text-sm w-64 md:text-md">
              For every verification you make, we will donate $10 to the charity
            </p>
          </div>
          <SocialButtons />
        </div>
      </dialog>
    </>
  );
}

export default Modal;
