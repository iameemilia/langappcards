import React, { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import "./WordCarousel.css";


const WordCarousel = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    };

    if (!words.length) {
        return <p>Нет доступных слов для отображения.</p>;
    }

    return (
        <div style={styles.carousel}>
            <button onClick={handlePrev} style={styles.button}>&lt;</button> {/* Стрелка влево */}
            <WordCard word={words[currentIndex]} />
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