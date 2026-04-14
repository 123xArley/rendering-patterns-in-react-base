import React from 'react';

export const UncontrolledInput = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`Producto añadido al carrito: ${inputRef.current.value} 😅`);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nombre del producto. Ej: Manzana"
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Añadir al carrito</button>
    </div>
  );
};
