import { useEffect, useState } from "react";
import { getImages } from "../services/requests";
import { Header } from "./header.component";
import { Card } from "./card.component";

export const Layout = () => {
    const [imagesResult, setImagesResult] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        getImages(value).then((res) => {
            console.log(res);
            return setImagesResult(res);
        });
    }, [value]);

    return (
        <>
            <header>
                <Header value={value} setvalue={setValue} />
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
