import ReactDOM from "react-dom";

interface ModalServiceProps {
    showModal: boolean;
    handleCloseModal: () => void;
    title: string;
    children: React.ReactNode;
}

export function ModalService({showModal,handleCloseModal,title,children}: ModalServiceProps) {


    
    if (!showModal) return null;

    return ReactDOM.createPortal (
        <>
            <div className="container mt-5">
                {/* Modal */}
                <div
                    className={`modal fade ${showModal ? "show d-block" : ""}`}
                    // tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: showModal ? "rgba(0,0,0,0.5)" : "transparent" }}
                    onClick={handleCloseModal} // Fecha o modal ao clicar fora
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h5 className="modal-title">{title}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                {
                                    children
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
    document.body
    );
}