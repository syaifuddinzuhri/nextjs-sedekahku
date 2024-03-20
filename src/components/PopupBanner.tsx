import { useState, useEffect } from 'react';
import { Image, Modal, ModalOverlay, ModalContent, ChakraProvider } from '@chakra-ui/react';
import { useNewsPopupQuery } from '../api/news';

interface PopupBannerProps {
    onClose: () => void;
}


const PopupBanner = ({ onClose }: PopupBannerProps) => {
    const { isLoading, error, isSuccess, data } = useNewsPopupQuery("BANNER");
    const images = data?.data.data.map(item => item) || [];

    const [showPopup, setShowPopup] = useState(false);
    const [hidePopupCheckbox, setHidePopupCheckbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleCheckboxChange = () => {
        setHidePopupCheckbox(!hidePopupCheckbox);
    };

    const closePopup = () => {
        localStorage.setItem('lastPopupShown', new Date().getTime().toString());

    };

    const close = () => {
        setShowPopup(false);
        localStorage.setItem('lastPopupShown', new Date().getTime().toString());

    }

    useEffect(() => {
        const lastPopupShown = localStorage.getItem('lastPopupShown');
        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000;
        if (!lastPopupShown || currentTime - parseInt(lastPopupShown, 10) > oneHour) {
            setShowPopup(true);
        }
        closePopup();
    }, []);


    if (!showPopup) {
        return null;
    }

    const currentImage = images[0];

    return (
        <ChakraProvider>
            <Modal isOpen={showPopup} onClose={close} variant="themed">
                <ModalOverlay />
                <ModalContent mx={5} borderRadius="20px" >
                    <a href={currentImage?.web_external_link ?? ""}>
                        <Image src={currentImage?.image ?? ""} alt="" borderRadius="20px" />
                    </a>
                </ModalContent>
            </Modal>
        </ChakraProvider >
    );
};

export default PopupBanner;
