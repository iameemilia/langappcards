import React, { useState } from "react";
import "./WordCard.css";

const WordCard = ({ word }) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const toggleTranslation = () => {
        setShowTranslation((prev) => !prev);
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.english}>{word.english}</h2>
            <p style={styles.transcription}>{word.transcription}</p>
            {showTranslation && <p style={styles.translation}>{word.russian}</p>}
            <button onClick={toggleTranslation}>
                {showTranslation ? "Скрыть перевод" : "Показать перевод"}
            </button>
        </div>
    );
};

const styles = {
    card: {
        border: '2px solid  #ff80848b',
        borderRadius: '10px',
        padding: '30px',
        margin: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(255, 128, 132, 0.55)',
        transition: 'border-color 0.6s',
        backgroundColor: '#fff',
        width: '300px',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    english: {
        color: '#333',
        fontSize: '28px',
        margin: '20px 0',
    },
    transcription: {
        color: '#007BFF',
        fontSize: '22px',
        margin: '5px 0',
    },
    translation: {
        color: '#FF4500',
        fontSize: '24px',
        margin: '5px 0',
    }

};

export default WordCard;