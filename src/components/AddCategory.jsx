import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        const value = inputValue.trim();

        if (value.length <= 1) return;
        onAddCategory(value);
        setInputValue('');
    }

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}