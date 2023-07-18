import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {

    /* useState de las images */
    const [images, setImages] = useState([]);
    /* useState del isLoading, se pone en true porque cuando ingrese se muestre que esta cargando mientras se muestra la imagen */
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getImages();
    },
        /* Se pone asi [] para que solo se dispare cuando se dibuja */
        []);
    /* Se crea el metodo para obtener y ponerle las images al images del useState */
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        /* Cuando se carga la imagen se pone en false */
        setIsLoading(false);
    }
    /* Se retornan los valores del hook */
    return {
        images: images,
        isLoading: isLoading,
    }
}
