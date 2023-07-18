import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (value) => {
        /* Agregar categoria a la lista y actualizar estado con el nuevo array */
        /* categories.push('Valorant');  */
        /* setCategories([...categories, 'Valorant']); */

        /* Validar que no se ingrese un mismo nombre dos veces */
        if (categories.includes(value)) return;

        setCategories((categories) => {
            return [value, ...categories,];
        });


    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                /* se puede hacer de esta forma enviando la funcion del padre al hijo */
                /* setCategories={setCategories} */
                /* Emitiendo un valor del hijo al padre */
                onNewCategory={(value) => {
                    onAddCategory(value);
                }}
            ></AddCategory>
            {/* Listado de items */}
            {/* <button onClick={() => { onAddCategory() }}>Agregar</button> */}
            {categories.map((category, index) => {
                /* return (
                    <div key={category}>
                        <h1>{category}</h1>
                        <li >{category}</li>
                    </div>
                ) */
                return <GifGrid key={category} category={category}></GifGrid>
            })}

        </>
    )
}
