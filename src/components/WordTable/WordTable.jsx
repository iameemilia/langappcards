import React, { useState } from "react";
import { ListOfWords } from '../ListOfWords';
import "./WordTable.css";

const WordTable = () => {
    const [words, setWords] = useState(ListOfWords);
    const [editIndex, setEditIndex] = useState(null);
    const [currentEditing, setCurrentEditing] = useState({});

    const handleEdit = (index) => {
        setCurrentEditing(words[index]);
        setEditIndex(index);
    };

    const handleChange = (e) => {
        setCurrentEditing({ ...currentEditing, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setEditIndex(null);
        setCurrentEditing({});
    };

    const handleSave = () => {
        const updatedWords = [...words];
        updatedWords[editIndex] = currentEditing;
        setWords(updatedWords);
        setEditIndex(null);
        setCurrentEditing({});
    };

    return (
        <table style={styles.table}>
            <thead>
                <tr>
                    <th>Английское слово</th>
                    <th>Транскрипция</th>
                    <th>Русский перевод</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word, index) => (
                    <tr key={word.id}>
                        <td>
                            {editIndex === index ? (
                                <input
                                    type="text"
                                    name="english"
                                    value={currentEditing.english}
                                    onChange={handleChange}
                                    className={editIndex === index ? 'editable-input' : ''} // Добавляем класс для стилей
                                />
                            ) : (
                                word.english
                            )}
                        </td>
                        <td>
                            {editIndex === index ? (
                                <input
                                    type="text"
                                    name="transcription"
                                    value={currentEditing.transcription}
                                    onChange={handleChange}
                                    className={editIndex === index ? 'editable-input' : ''} // Добавляем класс для стилей
                                />
                            ) : (
                                word.transcription
                            )}
                        </td>
                        <td>
                            {editIndex === index ? (
                                <input
                                    type="text"
                                    name="russian"
                                    value={currentEditing.russian}
                                    onChange={handleChange}
                                    className={editIndex === index ? 'editable-input' : ''} // Добавляем класс для стилей
                                />
                            ) : (
                                word.russian
                            )}
                        </td>
                        <td>
                            {editIndex === index ? (
                                <>
                                    <button onClick={handleSave}>✓</button> {/* Галочка для сохранить */}
                                    <button onClick={handleCancel}>✖</button> {/* Крестик для отмены */}
                                </>
                            ) : (
                                <>
                                    <button onClick={() => handleEdit(index)}>✏</button> {/* Карандаш для редактирования */}
                                    <button onClick={() => setWords(words.filter((_, i) => i !== index))}>✖</button> {/* Крестик для удаления */}
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const styles = {
    table: {
        borderCollapse: 'collapse', // Убираем двойные границы
        width: '100%', // Таблица занимает всю ширину
        marginTop: '70px', // Отступ сверху
        textAlign: 'center', // Выравнивание текста по центру
        padding: '10px', // Отступы в ячейках
    },
};

export default WordTable;