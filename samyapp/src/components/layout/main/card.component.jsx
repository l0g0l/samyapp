import { useState } from "react";
import like from "../../../assets/img/like.png";
import recargar from "../../../assets/img/recargar.png";

export const Card = ({ imagesresult }) => {
    const [countedLikes, setCountedLikes] = useState(0);
    const [countedDisLikes, setCountedDisLikes] = useState(0);

    return (
        <div className="c-card">
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
                    <div>
                        <img
                            src={like}
                            alt="like icon"
                            className="c-card__counter-likes--icon"
                        />
                    </div>
                </div>
                <div className="c-card__counter-dislikes">
                    <div>
                        <img
                            src={recargar}
                            alt="recharged icon"
                            className="c-card__counter-dislikes--icon"
                        />
                    </div>
                    <div>{countedDisLikes}</div>
                </div>
            </footer>
        </div>
    );
};
