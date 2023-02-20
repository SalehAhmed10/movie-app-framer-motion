import React, { useEffect } from 'react'

function Filter({ popular, setFiltered, activeGenre, setActiveGenre }) {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular)
            return
        }
        const filtered = popular.filter((movie) => {
            return movie.genre_ids.includes(activeGenre)
        })
        setFiltered(filtered)

    }, [activeGenre])


    const active = 'bg-purplecolor text-white'

    return (
        <div className="filter-container my-10">
            <button
                className={`mr-[2rem] min-w[5em] px-5 py-1 rounded-3xl text-purplecolor border-solid border-2 border-purplecolor ${activeGenre === 0 ? `${active}` : ''}`}

                onClick={() => {
                    setActiveGenre(0)
                }}
            >
                All
            </button>
            <button
                className={`mr-[2rem] min-w[5em] px-5 py-1 rounded-3xl text-purplecolor border-solid border-2 border-purplecolor
                ${activeGenre === 35 ? `${active}` : ''}`}

                onClick={() => {
                    setActiveGenre(35)
                }}
            >
                Comedy
            </button>
            <button
                className={`mr-[2rem] min-w[5em] px-5 py-1 rounded-3xl text-purplecolor border-solid border-2 border-purplecolor
                active:text-white ${activeGenre === 28 ? `${active}` : ''
                    }`}
                onClick={() => {
                    setActiveGenre(28)
                }}
            >
                Action
            </button>

        </div>
    )
}

export default Filter