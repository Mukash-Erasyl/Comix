import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Используем useNavigate вместо useHistory
import { getComixById } from '../../../services/comixService';
import './ComixDetail.css'; // Импорт CSS файла

const ComixDetail = () => {
    const { id } = useParams();
    const [comix, setComix] = useState(null);
    const navigate = useNavigate(); // Используем useNavigate

    useEffect(() => {
        const fetchComix = async () => {
            const comixData = await getComixById(id);
            setComix(comixData);
        };

        fetchComix();
    }, [id]);

    if (!comix) return <div>Loading...</div>;

    return (
        <div className="ComixDetail">
            <button onClick={() => navigate('/')}>Back to list</button> {/* Используем navigate для перехода */}
            <div className='comixDescription'>
                <div className="comixImg">
                    <img src={comix.coverImage} alt="Comix cover" /> {/* Изменен alt атрибут */}
                </div>

                <div className="comixInfo">
                    <div className='comixTitle'>

                    </div>


                    <div className='metaInfo'>
                        <div className='views'>-</div>
                        <div className='dateComix'>{comix.year}</div>
                        <div className='status'>{comix.status}</div>
                        <div className='top'>{comix.inTop}</div>
                    </div>

                    <div className='translation'>
                        <div className='textInfo'>Переводчики</div>
                        <div className='contentInfo'>
                            {comix.translations.map((translation, index) => (
                                <div className="tag" key={index}>{translation}</div>
                            ))}
                        </div>
                    </div>

                    <div className='publisher'>
                        <div className='textInfo'>Автор: </div>

                        <div className='contentInfo'>{comix.publisher}</div>


                    </div>

                    <div className='category'>
                        <div className='textInfo'>Категроии: </div>
                        <div className='contentInfo'>
                            {comix.genre.map((gen, index) => (
                                <div className="tag" key={index}>{gen}</div>
                            ))}
                        </div>
                    </div>
                    <div className='tags'>
                        <div className='textInfo'>Теги: </div>
                        <div className='contentInfo'>
                            {comix.tags.map((tag, index) => (
                                <div className="tag" key={index}>{tag}</div>
                            ))}
                        </div>

                    </div>
                    <div className='comixDesc'>
                        <div className='textInfo'>Описание: </div>
                        <div className='contentInfo'>{comix.description}</div>
                    </div>
                </div>


            </div>

            <div className='comixContent'>
                {comix.images.map((image, index) => (
                    <div className='imageComix'>
                        <img src={image}></img>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default ComixDetail;
