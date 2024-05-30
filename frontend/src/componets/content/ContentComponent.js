import React, { useState, useEffect } from 'react';
import { getComix } from '../../services/comixService'; // Импорт сервиса
import Comix from './comix/ComixComponent';
import styles from "./Comix.module.css"; // Импорт модульного файла стилей
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ComixList = () => {
    const [comixList, setComixList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const comixData = await getComix();
            setComixList(comixData);
        };

        fetchData();
    }, []);

    const handleComixClick = (id) => {
        navigate(`/comix/${id}`);
    };

    return (
        <div className={styles.content}>
            <h2>Comix</h2>
            <ul className={styles.ComixList}>
                {comixList.map(comix => (
                    <li key={comix.id} onClick={() => handleComixClick(comix.id)}>
                        <Comix comix={comix} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComixList;