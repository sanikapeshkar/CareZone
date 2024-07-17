import React, { useState } from 'react';

const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="image-uploader">
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="w-[100%]  rounded-lg p-2 text-sm bg-blue-00 "
            />
            {selectedImage && (
                <div className="mt-4">
                    <img 
                        src={selectedImage} 
                        alt="Preview" 
                        className="w-32 h-32 object-cover rounded-lg" 
                    />
                    <button 
                        onClick={handleRemoveImage} 
                        className="mt-2 bg-red-500 text-white p-2 rounded-lg"
                    >
                        Remove Image
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
