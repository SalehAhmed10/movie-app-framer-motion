import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Movie({ movie }) {

    const imageUrl = `https://image.tmdb.org/t/p/original`

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}

        >
            <Image
                src={`${imageUrl}${movie.backdrop_path}`}
                alt="Picture of the author"
                width={1000}
                height={1000}
                className='w-[100%] h-[30vh] object-cover rounded-lg mb-[1rem]'
            />
            <h2 className='text-[0.8rem]'>{movie.title}</h2>
        </motion.div>
    )
}

export default Movie