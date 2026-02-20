import Close from "../../../public/close.png"

import { Button, CloseImg, Description, ModalContainer, ModalContent, Porcao, Title, Modal } from "./styles"

type Props = {
    id: number;
    title: string;
    media: string;
    description: string;
    porcao: string;
    price: string;
    isOpen?: boolean;
    onClose?: () => void;
}


export default function ModalCardapio({ title, media, description, porcao, price, id, isOpen = false, onClose = () => {} }: Props) {

    return (
        <>
            <Modal key={id} className={isOpen ? "visivel" : ""}>
                <div className="container">
                    <ModalContainer>
                        <CloseImg src={Close} onClick={onClose} alt="Close" />
                        <ModalContent>
                            <img src={media} alt={title} />
                            <div>
                                <Title>{title}</Title>
                                <Description>
                                    {description}
                                </Description>
                                <Porcao>Serve: {porcao}</Porcao>
                                <Button>Adicionar ao carrinho - {price}</Button>
                            </div>
                        </ModalContent>
                    </ModalContainer>
                </div>
                <div className="overlay"></div>
            </Modal>
        </>
    )
}
