import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './newsdetail.css';

function NewsDetail() {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => {
                json.imageUrl = `https://via.placeholder.com/750x150?text=Image${id}`;
                setNewsItem(json);
            });
    }, [id]);

    if (!newsItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-news-container">
            <h1>News Detail</h1>
            <div className="detail-news-item">
                <h2>{newsItem.title}</h2>
                <div className="detail-news-image">
                    <img src={newsItem.imageUrl} alt={`Image for ${newsItem.title}`} />
                </div>
                <p>{newsItem.body}</p>
                <div className="detail-news-actions">
                    <Link to="/news" className="detail-back-button">
                        Back to News
                    </Link>
                    <button className="detail-share-button">Share</button>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;
