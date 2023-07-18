
import { GitItem } from "./GitItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    /* Se crea el Hook con nombre de useFetchGifs que va hacer todo lo que esta comentado para que regrese las imagenes y isLoading para
    saber si se encuentra cargando */
    const { images, isLoading } = useFetchGifs(category);
    /* const [images, setImages] = useState([]);

    useEffect(() => {
        getImages();
    },
        Se pone asi [] para que solo se dispare cuando se dibuja
        []);
    Se crea el metodo para obtener y ponerle las images al images del useState
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    } */

    return (
        <>
            <h3>{category}</h3>
            {/* Usar ternario para validar el isLoading */}
            {/* Se puede hacer asi con un ternario tambien */}
            {/* {
                isLoading ? (<h2>Cargando...</h2>) : null
            } */}
            { isLoading && (<h2>Cargando...</h2>)}
            <div className="card-grid">
                {images.map(image => {
                    return <GitItem key={image.id}
                        /* Esparcir las propiedades de la image {...image} */
                        {...image}></GitItem>
                })}
            </div>
        </>
    )
}
