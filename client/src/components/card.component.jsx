import { useState, useEffect } from "react";
import { postLikes } from "../services/requests";
import like from "../assets/img/like.png";
import dislike from "../assets/img/dislike.png";
import recargar from "../assets/img/recargar.png";

export const Card = ({ imagesresult }) => {
    const [countedLikes, setCountedLikes] = useState(0);
    const [countedDisLikes, setCountedDisLikes] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        if (countedLikes) {
            setIsEmpty(false);
        }
    }, [countedLikes]);

    return (
        <div className="c-card">
            <div className="c-card__price">
                <div className="c-card__price--amount">
                    <span>{imagesresult.price.toFixed(2)}</span>
                    <sub>€</sub>
                </div>
            </div>
            <img
                src={imagesresult.main_attachment.small}
                alt={imagesresult.title}
                className="c-card__img"
            />
            <div className="c-card__title-container">
                <span className="c-card__title-container--title">
                    {imagesresult.title}
                </span>
                <div>
                    <span className="c-card__title-container--subtitle1">
                        by{" "}
                    </span>
                    <span className="c-card__title-container--subtitle2">
                        {imagesresult.author}
                    </span>
                </div>
            </div>

            <footer className="c-card__footer">
                <div className="c-card__counter-likes">
                    <div>{countedLikes}</div>
                    <button
                        onClick={() => {
                            postLikes(imagesresult.id);
                            setCountedLikes(countedLikes + 1);
                        }}
                    >
                        {isEmpty ? (
                            <img
                                src={dislike}
                                alt="like icon"
                                className="c-card__counter-likes--icon"
                            />
                        ) : (
                            <img
                                src={like}
                                alt="dislike icon"
                                className="c-card__counter-likes--icon"
                            />
                        )}
                    </button>
                </div>
                <div className="c-card__counter-dislikes">
                    <button
                        onClick={() => {
                            setCountedLikes(countedLikes - 1);
                            setCountedDisLikes(countedDisLikes + 1);
                        }}
                    >
                        <img
                            src={recargar}
                            alt="recharged icon"
                            className="c-card__counter-dislikes--icon"
                        />
                    </button>
                    <div>{countedDisLikes}</div>
                </div>
            </footer>
        </div>
    );
};
