import React, { useEffect, useState } from 'react'
import { API_OPTIONS, IMG_CDN } from '../utils/constants'

const Main = (props) => {
    const [movieList, setMovieList] = useState([]) // has movie list
    const [poster, setPoster] = useState([]) // holding each poster
    const [activeIndex, setActiveIndex] = useState(0)

    const trendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_OPTIONS)
        const json = await data.json()
        console.log(json)
        setMovieList(json.results)
        const urls = json.results.map((movie, index) => (
            IMG_CDN + movie.backdrop_path
        ))
        setPoster(urls)
        console.log(poster)
    }

    const handleNext=()=>{
        setActiveIndex((prev)=>(prev+1)%poster.length)
    }

    const handlePrev = ()=>{
        setActiveIndex((prev)=>prev===0?poster.length-1 :prev-1)
    }

    

    useEffect(() => {
        trendingMovies()
        
    }, [])

    useEffect(()=>{
        const setTimeOut=setTimeout(()=>{
            handleNext()
    
        },3000)
        return()=>clearTimeout(setTimeOut)

    },[activeIndex])

    return (
        <div className='flex items-center justify-center space-x-4'>
            <button className='text-white bg-gray-800 px-4 py-2 rounded' onClick={handlePrev}>Prev</button>
            {poster.length > 0 && (
                <img src={poster[activeIndex]} alt='Current poster' className='max-w-full h-auto' />
            )}
            <button className='text-white bg-gray-800 px-4 py-2 rounded ' onClick={handleNext}>Next</button>
        </div>
    )
}

export default Main
