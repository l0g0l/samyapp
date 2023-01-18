export const getImages = async () => {
    try {
        const images_res = await fetch("http://localhost:3100/images");

        const images_json = await images_res.json();

        return images_json;
    } catch (error) {
        console.log(error);
    }
};

export const postLikes = async (id) => {
    try {
        const likes_res = await fetch(
            `http://localhost:3100/images/${id}/likes`
        );

        const likes_json = await likes_res.json();

        return likes_json;
    } catch (error) {
        console.log(error);
    }
};
