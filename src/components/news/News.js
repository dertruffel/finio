import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './news.css';

class NewsObject extends Component {
    state = {
        articles: [],
        enlarged: false,
        loading: true,
        currentPage: 1,
        totalPages: 1,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = (page = 1) => {
        const apiUrl = `https://api-finio.truffel.dev/api/articles/?page=${page}`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    articles: data.articles,
                    loading: false,
                    currentPage: data.page,
                    totalPages: data.pages,
                });
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                this.setState({
                    loading: false,
                });
            });
    };

    handlePageChange = (page) => {
        this.fetchData(page);
    };

    toggleEnlarged = () => {
        this.setState((prevState) => ({
            enlarged: !prevState.enlarged,
        }));
    };

    render() {
        const { articles, enlarged, loading, currentPage, totalPages } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="news-container">
                <h1>News</h1>
                <div className="news-list">
                    {articles.map((article) => (
                        <div className={`news-item ${enlarged ? 'enlarged' : ''}`} key={article.id}>
                            <div className="news-content">
                                <h2>
                                    <NavLink to={`${article.link}`} className="news-detail-link-black">
                                        {article.title_eng}
                                    </NavLink>
                                </h2>
                                <div className="news-image">
                                    <NavLink to={`${article.link}`} className="news-detail-link-black">
                                        <img
                                            src={article.image}
                                            alt={article.title_eng}
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </NavLink>
                                </div>
                                <p>{article.description_eng.substring(0, 512)}...</p>
                                <div className="news-actions">
                                    <NavLink to={`${article.link}`} className="news-detail-link" target="_blank">
                                        Read More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="page-selector news-container">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => this.handlePageChange(page)}
                                className={`page-button ${currentPage === page ? 'active' : ''}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>


            </div>

        );


    }

}

export default NewsObject;
