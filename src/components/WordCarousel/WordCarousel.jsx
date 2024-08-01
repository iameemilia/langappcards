import React, { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import "./WordCarousel.css";

const WordCarousel = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % words.length;
            setShowTranslation(false); // Скрыть перевод при смене карточки
            return newIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + words.length) % words.length;
            setShowTranslation(false); // Скрыть перевод при смене карточки
            return newIndex;
        });
    };

    const toggleTranslation = () => {
        setShowTranslation((prev) => !prev);
    };

    if (!words.length) {
        return <p>Нет доступных слов для отображения.</p>;
    }

    return (
        <div style={styles.carousel}>
            <button onClick={handlePrev} style={styles.button}>&lt;</button> {/* Стрелка влево */}
            <WordCard 
                word={words[currentIndex]} 
                showTranslation={showTranslation} 
                toggleTranslation={toggleTranslation} 
            />
            <button onClick={handleNext} style={styles.button}>&gt;</button> {/* Стрелка вправо */}
        </div>
    );
};

const styles = {
    carousel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        margin: '10px',
    },
};

export default WordCarousel;
