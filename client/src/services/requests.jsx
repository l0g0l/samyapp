export const getImages = async (value) => {
    try {
        const images_res = await fetch(
            `http://localhost:3100/images`
            // `http://localhost:3100/images?search=${value}`
        );

        const images_json = await images_res.json();

        return images_json;
    } catch (error) {
        console.log(error);
    }
};

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(""),
};
export const postLikes = async (id) => {
    try {
        const likes_res = await fetch(
            `http://localhost:3100/images/${id}/likes`,
            options
        );
        const likes_json = await likes_res.json();
        console.log(likes_json);
        return likes_json;
    } catch (error) {
        console.log(error);
    }
};
