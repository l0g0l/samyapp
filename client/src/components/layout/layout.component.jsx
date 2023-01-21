import { useEffect, useState } from "react";
import { getImages, postLikes } from "../../services/requests";
import { Header } from "./header/header.component";
import { Card } from "./main/card.component";

export const Layout = () => {
    const [imagesResult, setImagesResult] = useState([]);

    useEffect(() => {
        getImages().then((res) => {
            console.log(res);
            return setImagesResult(res);
        });
    }, []);

    return (
        <>
            <header>
                <Header />
            </header>

            <main className="c-children">
                <ul>
                    {imagesResult.map((card) => {
                        return (
                            <li key={card.id}>
                                <Card imagesresult={card} />
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
};
