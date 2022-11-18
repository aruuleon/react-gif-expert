import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifsSearch = async () => {
        const newImages = await getGifs(category);
        setGifs(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getGifsSearch();
    }, [])

    return {
        gifs,
        isLoading,
    }
}