import React , {useState} from 'react';
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
const Product = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openImageModal = (imgSrc, altText) => {
        setSelectedImage({ imgSrc, altText });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const products = [
        { id: 1, imgSrc: "/product (1).png", altText: "image 1" },
        { id: 2, imgSrc: "/product (2).png", altText: "image 2" },
        { id: 3, imgSrc: "/product (3).png", altText: "image 3" },
        { id: 4, imgSrc: "/product (4).png", altText: "image 4" },
        { id: 5, imgSrc: "/product (5).png", altText: "image 5" },
        { id: 6, imgSrc: "/product (6).png", altText: "image 6" },
        { id: 7, imgSrc: "/product (14).png", altText: "image 7" },
        { id: 8, imgSrc: "/product (7).png", altText: "image 8" },
        { id: 9, imgSrc: "/product (8).png", altText: "image 9" },
        { id: 10, imgSrc: "/product (9).png", altText: "image 10" },
        { id: 11, imgSrc: "/product (10).png", altText: "image 11" },
        { id: 12, imgSrc: "/product (13).png", altText: "image 12" },
        { id: 13, imgSrc: "/product (11).png", altText: "image 13" },
        { id: 14, imgSrc: "/product (12).png", altText: "image 14" },
    ];

    return (
        <div>
            <Head />
            <main
                id="content"
                className="prose container prose-primary max-w-full container dark:prose-invert"
            >
                <h2 className="mb-2 mt-2 text-center" style={{ color: "#FF2424", fontSize: "50px" }}>
                    Our Product
                </h2>
                <div className="block py-12">
                <ul className="not-prose grid list-none grid-cols-3 gap-8">
                        {products.map((product, index) => (
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
            {selectedImage && (
                <ImageModal
                    imgSrc={selectedImage.imgSrc}
                    altText={selectedImage.altText}
                    onClose={closeImageModal}
                />
            )}
            <Footer />
        </div>
    );
}

export default Product;
