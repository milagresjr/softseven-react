import { ReactNode, useState } from "react";
import './styles.css';
import { ModalService } from "../ModalServices";
import { DesenvolvimentoWeb } from "../../descriptionServices/desenvolvimento-web";
import { MaterialInformatico } from "../../descriptionServices/material-informatico";
import { ComunicaocaoInfra } from "../../descriptionServices/comunicacao-infra";

interface ItemServiceProps {
    icon: ReactNode;
    title: string;
    description: string;
    item: number;
}

export default function ItemService(props: ItemServiceProps) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item position-relative cursor-default">

                    <div className="icon">
                        {props.icon}
                    </div>

                    <h4>{props.title}</h4>

                    <p className="truncate-text">
                        {props.description.length > 150 || props.item == 6 ? (
                            <>
                                {props.description.slice(0, 150)}...
                                <button onClick={handleShowModal} className="text-blue-600 font-bold ml-2">
                                    Saber Mais
                                </button>
                            </>
                        ) : (
                            props.description
                        )}
                    </p>

                    {/* Modal dentro da coluna */}
                    <ModalService
                        title={props.title}
                        showModal={showModal}
                        handleCloseModal={handleCloseModal}
                    >
                        {props.item === 1 ? (
                            <p>{props.description}</p>
                        ) : props.item === 2 ? (
                            <p>{props.description}</p>
                        ) : props.item === 3 ? (
                            <ComunicaocaoInfra />
                        ) : props.item === 4 ? (
                            <p>{props.description}</p>
                        ) : props.item === 5 ? (
                            <DesenvolvimentoWeb />
                        ) : props.item === 6 ? (
                            <MaterialInformatico />
                        ) : (
                            <></>
                        )
                        }

                    </ModalService>

                </div>
            </div>

        </>
    );
}
