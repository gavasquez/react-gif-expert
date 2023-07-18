export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wkjP6XzGxc9j3wa8VQRzB2dWaerPWPYp&q=${category}&limit=10`;
    const respuesta = await fetch(url);
    /* Obtenemos la data */
    const { data } = await respuesta.json();
    /* Retornamos un nuevo objeto */
    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.downsized_medium.url
        }
    })
    return gifs;
};