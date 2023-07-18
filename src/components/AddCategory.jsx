import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {

    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    /* Para no recargar la  pagina cuando se da enter al input */
    event.preventDefault();
    /* se evalua para que no ingresa caracteres vacios */
    /* inputValue.trim().length validacion para saber si en el input hay menos de un caracter entonces no realiza la inserción */
    if (inputValue.trim().length <= 1) return;
    /* setCategories como es una funcion se puede obtener los datos que tiene */
    /* Obtenemos las categories en el estado actual */
    /* se puede hacer de esta forma enviando la funcion del padre al hijo */
    /* setCategories((categories) => {
      return [inputValue, ...categories];
    }); */

    /* Emitiendo el evento del hijo al padre y se le pasa el valor de inputValue */
    onNewCategory(inputValue.trim());

    /* despues de realizar la inserción se limpia el setInputValue para dejar la caja de texto vacia */
    setInputValue('');
  }

  return (
    <form onSubmit={(event) => {
      onSubmit(event);
    }}>
      <input type="text" placeholder="Buscar Gifs..."
        value={inputValue}
        /* Se debe poner el onChange porque le estamos asignado un value */
        onChange={(event) => {
          onInputChange(event);
        }}
      ></input>
    </form>
  )
}
