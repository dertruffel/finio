import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import './news.css';

class NewsObject extends Component {
    constructor() {
        super();
        this.state = {
            news: [],
            enlarged: false,
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                const newsWithImages = json.slice(0, 7).map((item, index) => ({
                    ...item,
                    imageUrl: `https://via.placeholder.com/750x150?text=Image${index + 1}`,
                }));

                this.setState({
                    news: newsWithImages,
                });
            });
    }

    toggleEnlarged = () => {
        this.setState((prevState) => ({
            enlarged: !prevState.enlarged,
        }));
    };

    render() {
        const { news, enlarged } = this.state;

        return (
            <div className="news-container">
                <h1>News</h1>
                <div className="news-list">
                    {news.map((newsItem) => (
                        <div className={`news-item ${enlarged ? 'enlarged' : ''}`} key={newsItem.id}>
                            <div className="news-content">
                                <h2>
                                    <NavLink to={`/news/${newsItem.id}`} className="news-detail-link-black">
                                        {newsItem.title}
                                    </NavLink>
                                </h2>
                                <div className="news-image">
                                    <NavLink to={`/news/${newsItem.id}`} className="news-detail-link-black">
                                        <img src={newsItem.imageUrl} alt={` ${newsItem.title}`} />
                                    </NavLink>
                                </div>
                                <p>{newsItem.body.substring(0, 512)}...</p>
                                <div className="news-actions">
                                    <NavLink to={`/news/${newsItem.id}`} className="news-detail-link">
                                        Read More
                                    </NavLink>
                                    <button className="share-button">Share</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default NewsObject;
