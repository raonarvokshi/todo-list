import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ text: text }) {
    const [modal, setModal] = useState(false);

    function handleDelete() {
        setModal(true);
    }

    function closeModal() {
        setModal(false)
    }

    return (
        <div className="card">
            <h2>{text}</h2>
            <div className="actions">
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>

            {modal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
            {modal && <Backdrop onClick={closeModal} />}
        </div>
    );
}

export default Todo;