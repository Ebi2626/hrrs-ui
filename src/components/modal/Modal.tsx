import './Modal.scss';

import { ModalProps, ModalSize } from "./Modal.model";

export function Modal({ size, children }: Readonly<ModalProps>) {
  return (
    <div className="fixed top-0 left-0 z-20 flex justify-center items-center w-screen h-screen bg-black/30">
      <div className={`z-30 bg-white w-full p-10 shadow-lg modal modal-${size} ${size !== ModalSize.FULL && 'rounded-lg'}`}>
        {children}
        </div>
    </div>
  );
}
