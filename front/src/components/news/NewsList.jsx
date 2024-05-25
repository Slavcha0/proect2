import { useEffect, useState, useCallback } from 'react';
import './newslist.css';
import config from '../../params/config';

export default function NewsList({limit, paginator = false}) {
    const [news, setNews] = useState([]);

    const fetchNews = useCallback(async () => {
        const response = await fetch(config.api + 'get/film/');
        const answer = await response.json();
        setNews(answer.data);
    }, []);

    useEffect(
        () => {fetchNews()}, [fetchNews]
    );

    return (
        <>
        <div className='film-list'>   
            {
                news && news.map(el => (
                    <div className='film-card'>
                        <div className='poster'>
                            <img src={el.POSTER} alt={el.TITLE} />
                        </div>
                        <div className='props'>
                            <span>Год:</span>
                            <span>{el.YEAR}</span>
                            <span>Жанр:</span>
                            <span>{el.GENRE}</span>
                            <span>Оценка:</span>
                            <span>{el.RATING}</span>
                        </div>
                        <div className='comment'>
                            <h3>{el.TITLE}</h3>
                            <span>Комментарий:</span>
                            <div>
                            {el.OPINION}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}