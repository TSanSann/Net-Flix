import "./Movie.css"
import data from "../data"
import DeleteButton from "./DeleteButton"
import AllDeleteButton from "./AllDeleteButton"
import RealoadMovieButton from "./RealoadMovieButton"
import {useState} from "react"


const Movie = () => {
    const [moveList, setMovieList] = useState(data)

    const DeleteOneeMovie = (idecko) => {

        const filteredMovies = moveList.filter( (oneMovie) => {
              return oneMovie.id !== idecko  
        })

        setMovieList(filteredMovies)
    }

    const deleteAllMovies = () => {

        setMovieList([])

    }

    const Refresh = () => {
        setMovieList(data)
    }

    return(
        <div className="all-movie">
            {

                moveList.map( (oneMovie) => {

                    const {id, image, title,age,tags,description} = oneMovie

                    return(
                        
                        <div className="one-movie" key={id}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                            <DeleteButton xxx={() => DeleteOneeMovie(id)} ></DeleteButton>
                        </div>
                    )
                })
            }
            <div className="tlacitka">
            <AllDeleteButton xxxAll={deleteAllMovies}></AllDeleteButton>
            <RealoadMovieButton xxxReaload={Refresh}></RealoadMovieButton>
            </div>
            
        </div>

    )

}


export default Movie