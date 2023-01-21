import React, { useEffect, useState } from "react";
import arrow from "../assets/img/arrow.png";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="c-scroll" aria-label="Click">
            {isVisible && (
                <div
                    aria-label="Up to Top"
                    onClick={scrollToTop}
                    id="arrowfixed"
                >
                    <img
                        src={arrow}
                        className="c-scroll__img"
                        alt="scrollup icon"
                    />
                </div>
            )}
        </div>
    );
};
