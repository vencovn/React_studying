import './modal.css';
import FormModal from '../FormModal';

function Modal ({show, onModalClose}) {

    const onClose = () => {
        if (typeof onModalClose === 'function'){
            onModalClose();
        }
    }

    if(show) {
        return (
            <div className="modal" id="modal">
                <div className="modal_content">
                    <FormModal />
                    <button className="modal__close" type="button" onClick={onClose}></button>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default Modal;