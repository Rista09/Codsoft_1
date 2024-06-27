import React, { useEffect, useState } from 'react';
import image1 from '../assest/banner/banner.jpg';
import image2 from '../assest/banner/banner2.jpg';
// import image1Mobile from '../assest/banner/img1_mobile.jpg';
// import image2Mobile from '../assest/banner/img2_mobile.webp';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [
        image1,
        image2,
        // Add more desktop images here if needed
    ];

    const mobileImages = [
        image1,
        image2,
        // Add more mobile images here if needed
    ];

    const nextImage = () => {
        if (desktopImages.length - 1 > currentImage) {
            setCurrentImage((prev) => prev + 1);
        }
    };

    const prevImage = () => {
        if (currentImage !== 0) {
            setCurrentImage((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (desktopImages.length - 1 > currentImage) {
                nextImage();
            } else {
                setCurrentImage(0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="container mx-auto px-4 rounded">
            <div className="h-120 md:h-96 w-full bg-slate-200 relative">
                <div className="absolute z-10 h-full w-full md:flex items-center hidden">
                    <div className="flex justify-between w-full text-4xl">
                        <button onClick={prevImage} className="bg-white shadow-md rounded-full p-3">
                            <FaAngleLeft />
                        </button>
                        <button onClick={nextImage} className="bg-white shadow-md rounded-full p-3">
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                {/* Desktop and tablet version */}
                <div className="hidden md:flex h-full w-full overflow-hidden">
                    {desktopImages.map((imageUrl, index) => (
                        <div
                            className="w-full h-full min-w-full min-h-full transition-all"
                            key={imageUrl}
                            style={{ transform: `translateX(-${currentImage * 100}%)` }}
                        >
                            <img src={imageUrl} className="w-full h-full object-cover" alt={`Desktop Banner ${index}`} />
                        </div>
                    ))}
                </div>

                {/* Mobile version */}
                <div className="flex h-full w-full overflow-hidden md:hidden">
                    {mobileImages.map((imageUrl, index) => (
                        <div
                            className="w-full h-full min-w-full min-h-full transition-all"
                            key={imageUrl}
                            style={{ transform: `translateX(-${currentImage * 100}%)` }}
                        >
                            <img src={imageUrl} className="w-full h-full object-cover" alt={`Mobile Banner ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerProduct;
