import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {
        const valueToUpperCase = value.toUpperCase();

        if (categories.includes(valueToUpperCase)) return;

        setCategories([valueToUpperCase, ...categories]);
    }

    return (
        <>
            <h1> Encontrá tus Gifs </h1>
            <AddCategory onAddCategory={onAddCategory} newCategory />

            {
                categories.map((category) => (<GifGrid key={category} category={category} />))
            }
        </>
    )
}