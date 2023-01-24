import { useState, useEffect } from "react";
import { postLikes } from "../services/requests";
import like from "../assets/img/like.png";
import dislike from "../assets/img/dislike.png";
import recargar from "../assets/img/recargar.png";

export const Card = ({ imagesresult }) => {
    const [countedLikes, setCountedLikes] = useState(imagesresult.likes_count);
    const [countedDisLikes] = useState("000");
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        if (countedLikes) {
            setIsEmpty(false);
        }
    }, [countedLikes]);

    return (
        <div className="c-card">
            <div className="c-card__price" data-cy="price">
                <div className="c-card__price--amount" data-cy="amount">
                    <span>{imagesresult.price.toFixed(2)}</span>
                    <sub>€</sub>
                </div>
            </div>
            <img
                data-cy="photo"
                src={imagesresult.main_attachment.small}
                alt={imagesresult.title}
                className="c-card__img"
            />
            <div className="c-card__title-container">
                <span
                    data-cy="title"
                    className="c-card__title-container--title"
                >
                    {imagesresult.title}
                </span>
                <div>
                    <span
                        data-cy="subtitle"
                        className="c-card__title-container--subtitle1"
                    >
                        by{" "}
                    </span>
                    <span className="c-card__title-container--subtitle2">
                        {imagesresult.author}
                    </span>
                </div>
            </div>

            <footer className="c-card__footer" data-cy="footer">
                <div className="c-card__counter-likes">
                    <div data-cy="counterlikes">{countedLikes}</div>
                    <button
                        data-cy="btnlike"
                        onClick={() => {
                            postLikes(imagesresult.id);
                            setCountedLikes(countedLikes + 1);
                        }}
                    >
                        {isEmpty ? (
                            <img
                                data-cy="likeicon"
                                src={dislike}
                                alt="like icon"
                                className="c-card__counter-likes--icon"
                            />
                        ) : (
                            <img
                                data-cy="dislikeicon"
                                src={like}
                                alt="dislike icon"
                                className="c-card__counter-likes--icon"
                            />
                        )}
                    </button>
                </div>
                <div className="c-card__counter-dislikes">
                    <button data-cy="btndislike">
                        <img
                            data-cy="rechargedicon"
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
