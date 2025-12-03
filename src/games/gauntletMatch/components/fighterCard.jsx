import React, { useState } from "react";
const GenericWrestlerImg = '/assets/gauntletMatch/assets/genericWrestler.png';

function FighterCard({ fighter }) {
    const [imageError, setImageError] = useState(false);
    
    // Comprehensive null/undefined checks
    if (!fighter) {
        return (
            <div className="w-32 h-32 bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Loading...</span>
            </div>
        );
    }

    // Safe name extraction
    const fighterName = typeof fighter.name === 'string' ? fighter.name : 'Unknown Fighter';
    
    // Safe image URL extraction
    const imageUrl = typeof fighter.img === 'string' && fighter.img.trim() ? fighter.img : null;
    
    const handleImageError = (e) => {
        console.warn('Failed to load fighter image:', imageUrl);
        console.warn('Image element src:', e.target.src);
        setImageError(true);
    };

    const handleImageLoad = (e) => {
        console.log('Successfully loaded image:', e.target.src);
        setImageError(false);
    };

    // Debug logging
    console.log('FighterCard render:', {
        fighterName,
        imageUrl,
        imageError,
        finalSrc: !imageUrl || imageError ? GenericWrestlerImg : imageUrl
    });

    return (
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-800 border-2 border-cyan-400 rounded-lg flex flex-col items-center justify-center shadow-lg">
            <img
                src={!imageUrl || imageError ? GenericWrestlerImg : imageUrl}
                alt={`${fighterName} avatar`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-2 border-2 border-white"
                onError={handleImageError}
                onLoad={handleImageLoad}
            />
            <span className="text-white font-bold text-xs sm:text-sm text-center px-1">
                {fighterName}
            </span>
        </div>
    );
}

export default FighterCard;