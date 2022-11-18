import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h4> {category} </h4>
            {
                isLoading && <h4> Cargando... </h4>
            }
            <div className="card-grid">
                {
                    gifs.map(gif => (
                        <GifItem key={gif.id} {...gif} />
                    ))
                }
            </div>
        </>
    )
}