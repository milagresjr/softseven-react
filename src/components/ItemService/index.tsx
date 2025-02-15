import { ReactNode } from "react";
import './styles.css';


interface ItemServiceProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function ItemService(props: ItemServiceProps) {
    return (
        <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative cursor-default">
                <div className="icon">
                    {props.icon}
                </div>
                <h4>
                    {props.title}
                </h4>
                <p className="truncate-text">
                    {props.description.length > 150 ? (
                        <>
                            {props.description.slice(0, 150)}...
                            <a href="#" className="text-blue-600 font-bold ml-2"> Saber Mais</a>
                        </>
                    ) : (
                        props.description
                    )}
                </p>

            </div>
        </div>
    );

}