import React, { useState } from 'react';
import './AddComix.css';

import axios from 'axios';

const AddComix = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState([]);
    const [year, setYear] = useState('');
    const [publisher, setPublisher] = useState('');
    const [status, setStatus] = useState('ONGOING');
    const [coverImage, setCoverImage] = useState('');
    const [tags, setTags] = useState([]);
    const [inTop, setInTop] = useState(false);
    const [images, setImages] = useState([]);
    const [translations, setTranslations] = useState([]);
    const [similarComix, setSimilarComix] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newComix = {
            title,
            description,
            genre,
            year: parseInt(year),
            publisher,
            status,
            coverImage,
            tags,
            inTop,
            images,
            translations,
            similarComix: similarComix.map(Number)
        };

        try {
            const response = await axios.post('/api/comix', newComix);
            alert(response.data);
        } catch (error) {
            console.error('There was an error creating the comix!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value.split(','))} placeholder="Comma separated values" />
            </div>
            <div>
                <label>Year:</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
            </div>
            <div>
                <label>Publisher:</label>
                <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} required />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="ONGOING">ONGOING</option>
                    <option value="CLOSED">CLOSED</option>
                    <option value="ETC">ETC</option>
                </select>
            </div>
            <div>
                <label>Cover Image URL:</label>
                <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
            </div>
            <div>
                <label>Tags:</label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value.split(','))} placeholder="Comma separated values" />
            </div>
            <div>
                <label>In Top:</label>
                <input type="checkbox" checked={inTop} onChange={(e) => setInTop(e.target.checked)} />
            </div>
            <div>
                <label>Images:</label>
                <input type="text" value={images} onChange={(e) => setImages(e.target.value.split(','))} placeholder="Comma separated values" />
            </div>
            <div>
                <label>Translations:</label>
                <input type="text" value={translations} onChange={(e) => setTranslations(e.target.value.split(','))} placeholder="Comma separated values" />
            </div>
            <div>
                <label>Similar Comix (IDs):</label>
                <input type="text" value={similarComix} onChange={(e) => setSimilarComix(e.target.value.split(','))} placeholder="Comma separated values" />
            </div>
            <button type="submit">Add Comix</button>
        </form>
    );
};

export default AddComix;
