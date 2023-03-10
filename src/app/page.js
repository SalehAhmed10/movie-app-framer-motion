"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import Movie from '@/components/Movie'
import Filter from '@/components/Filter'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)


  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
    const movies = await data.json()
    setPopular(movies.results)
    // console.table(movies.results);
    setFiltered(movies.results)

  }

  return (
    <main className='container mx-auto mb-10 px-5 md:px-20'>


      {/* gradient h1 */}

      <div className="flex flex-col justify-center items-center text-center my-10">
        <h5 className="text-3xl font-extrabold text-gray-700 ">Popular Movies</h5>
      </div>

      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

      <div className="results mb-5">
        <p className="text-lg font-thin text-gray-500">Showing {filtered.length} results</p>
      </div>

      <motion.div
        className="popular-movies grid grid-cols-main gap-[1rem]"
        layout

      >
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}
