import React, { useState } from 'react';
import Head from './components/Head';
import Footer from './components/Footer';

// Modal Component
const ImageModal = ({ imgSrc, altText, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger animation when modal mounts
    React.useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 10); // Small delay to trigger CSS transition
    }, []);

    const closeModal = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Delay closing for smooth animation
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`relative transform transition-transform duration-300 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                <img src={imgSrc} alt={altText} className="max-w-full h-auto  shadow-lg" />
                <button
                    className="absolute top-2 right-2 text-white text-4xl p-2 cursor-pointer bg-black bg-opacity-50 rounded-full"
                    onClick={closeModal}
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const designImages = [
        { id: 1, imgSrc: "gallery (1).png", altText: "Design image 1" },
        { id: 2, imgSrc: "gallery (2).png", altText: "Design image 2" },
        { id: 3, imgSrc: "gallery (3).png", altText: "Design image 3" },
        { id: 4, imgSrc: "gallery (4).png", altText: "Design image 4" },
        { id: 5, imgSrc: "gallery (5).png", altText: "Design image 5" },
        { id: 6, imgSrc: "gallery (6).png", altText: "Design image 6" },
        { id: 7, imgSrc: "gallery (7).png", altText: "Design image 7" },
        { id: 8, imgSrc: "gallery (8).png", altText: "Design image 8" },
        { id: 9, imgSrc: "gallery (9).png", altText: "Design image 9" },
        { id: 10, imgSrc: "gallery (10).png", altText: "Design image 10" },
        { id: 11, imgSrc: "gallery (11).png", altText: "Design image 11" },
        { id: 12, imgSrc: "gallery (12).png", altText: "Design image 12" },
    ];

    const patchesImages = [
        { id: 13, imgSrc: "gallery (13).png", altText: "Patch image 1" },
        { id: 14, imgSrc: "gallery (14).png", altText: "Patch image 2" },
        { id: 15, imgSrc: "gallery (15).png", altText: "Patch image 3" },
        { id: 16, imgSrc: "gallery (16).png", altText: "Patch image 4" },
        { id: 17, imgSrc: "gallery (17).png", altText: "Patch image 5" },
        { id: 18, imgSrc: "gallery (18).png", altText: "Patch image 6" },
        { id: 19, imgSrc: "gallery (19).png", altText: "Patch image 7" },
        { id: 20, imgSrc: "gallery (20).png", altText: "Patch image 8" },
        { id: 21, imgSrc: "gallery (21).png", altText: "Patch image 9" },
        { id: 22, imgSrc: "gallery (22).png", altText: "Patch image 10" },
        { id: 23, imgSrc: "gallery (23).png", altText: "Patch image 11" },
        { id: 24, imgSrc: "gallery (24).png", altText: "Patch image 12" },
    ];

    const vectorImages = [
        { id: 25, imgSrc: "gallery2 (1).png", altText: "Vector image 1" },
        { id: 26, imgSrc: "gallery2 (2).png", altText: "Vector image 2" },
        { id: 27, imgSrc: "gallery2 (3).png", altText: "Vector image 3" },
        { id: 28, imgSrc: "gallery2 (4).png", altText: "Vector image 4" },
        { id: 29, imgSrc: "gallery2 (5).png", altText: "Vector image 5" },
        { id: 30, imgSrc: "gallery2 (6).png", altText: "Vector image 6" },
        { id: 31, imgSrc: "gallery2 (7).png", altText: "Vector image 7" },
        { id: 32, imgSrc: "gallery2 (8).png", altText: "Vector image 8" },
        { id: 33, imgSrc: "gallery2 (9).png", altText: "Vector image 9" },
        { id: 34, imgSrc: "gallery2 (10).png", altText: "Vector image 10" },
    ];

    const openImageModal = (imgSrc, altText) => {
        setSelectedImage({ imgSrc, altText });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <Head />
            <main
                id="content"
                className="prose container prose-primary max-w-full container dark:prose-invert"
            >
                <h2 className="mb-2 mt-2 text-center" style={{ color: "#FF2424", fontSize: "50px" }}>
                    Our     Gallery
                </h2>
                <h2 className="mb-2 mt-2 text-center" style={{ color: "#FF2424", fontSize: "50px" }}>
                    Design
                </h2>
                <div className="block py-12">
                    <ul className="not-prose grid list-none grid-cols-3 gap-8">
                        {designImages.map((product, index) => (
                            <li
                                key={product.id}
                                className="overflow-clip rounded-lg shadow-md"
                                style={{ transitionDelay: `${index * 0.15}s` }}
                            >
                                <a onClick={() => openImageModal(product.imgSrc, product.altText)}>
                                    <img src={product.imgSrc} alt={product.altText} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Patches Section */}
                <h2 className="mb-2 mt-2 text-center" style={{ color: "#FF2424", fontSize: "50px" }}>
                    Patches
                </h2>
                <div className="block py-12">
                    <ul className="not-prose grid list-none grid-cols-3 gap-8">
                        {patchesImages.map((product, index) => (
                            <li
                                key={product.id}
                                className="overflow-clip rounded-lg shadow-md"
                                style={{ transitionDelay: `${index * 0.15}s` }}
                            >
                                <a onClick={() => openImageModal(product.imgSrc, product.altText)}>
                                    <img src={product.imgSrc} alt={product.altText} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Vector Art Section */}
                <h2 className="mb-2 mt-2 text-center" style={{ color: "#FF2424", fontSize: "50px" }}>
                    Vector Art For Screen Printing
                </h2>
                <div className="block py-12">
                    <ul className="not-prose grid list-none grid-cols-3 gap-8">
                        {vectorImages.map((product, index) => (
                            <li
                                key={product.id}
                                className="overflow-clip rounded-lg shadow-md"
                                style={{ transitionDelay: `${index * 0.15}s` }}
                            >
                                <a onClick={() => openImageModal(product.imgSrc, product.altText)}>
                                    <img src={product.imgSrc} alt={product.altText} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
<Footer />
            {/* Modal to display selected image */}
            {selectedImage && (
                <ImageModal
                    imgSrc={selectedImage.imgSrc}
                    altText={selectedImage.altText}
                    onClose={closeImageModal}
                />
            )}
        </div>
    );
};

export default Gallery;
