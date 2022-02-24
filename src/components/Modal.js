import { useEffect, useRef } from 'react';
import '../bootstrap.min.css';



const Modal = props => {
    const modalRef = useRef();

    useEffect(() => {
        const clickOutsideContent = (e) => {
            if (e.target === modalRef.current) {
                props.setShow(false);
            }
        };
        window.addEventListener('click', clickOutsideContent);
        return () => {
            window.removeEventListener('click', clickOutsideContent);
        };
    }, [props]);

    return <div ref={modalRef} className="modal">
        <div className="modal_content">
            {
                !props.hideCloseButton && <span onClick={() => props.setShow(false)} className="modal_close">
                    &times;
                </span>
            }
            {props.children}
        </div>
    </div>;
};

export default Modal;

export const ModalHeader = props => {
    return <div className="modal_">
        {props.children}
    </div>
}

export const ModalBody = props => {
    return <div className="modal_">
        {props.children}
    </div>
}

export const ModalFooter = props => {
    return <div className="modal_">
        {props.children}
    </div>
}
