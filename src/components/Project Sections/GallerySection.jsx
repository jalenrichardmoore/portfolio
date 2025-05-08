import React, { useState, useEffect, useRef } from 'react';

function Modal({image, onClose}) {
    const modalRef = useRef();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        }
    })

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [onClose]);

    return (
        <div className = 'modal-overlay'>
            <div className = 'modal-content' ref = {modalRef}>
                <img src = {image} alt = 'full-size' />
            </div>
        </div>
    );
}

function GallerySection({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const goLeft = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goRight = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const openModal = (image) => {
        setSelectedImage(image);
    }

    const closeModal = () => {
        setSelectedImage(null);
    }

    return (
        <div className = 'project-section-header'>
            <h2>Gallery</h2>
            <br /><br /><br />
            <div className = 'gallery-section'>
                <button onClick = {goLeft} className = 'gallery-navigation'>←</button>
                <div className = 'gallery-image-strip'>
                    {
                        [0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset) % images.length;
                            return (
                                <img key = {index} src = {images[index]} alt = '' className = {offset === currentIndex ? 'active' : ''} onClick = {() => openModal(images[index])}/>
                            )
                        })
                    }
                </div>
                <button onClick = {goRight} className = 'gallery-navigation'>→</button>
                {
                    selectedImage && (<Modal image = {selectedImage} onClose = {closeModal}/>)
                }
            </div>
        </div>
    );
}

export default GallerySection;