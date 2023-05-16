import React from 'react'
import AnimatePage from '../animation/AnimatePage'
import Spinner from '../comp/Spinner'
import {motion} from 'framer-motion'
const SearchList = ({loading,searchList}) => {
  return (
    <div className="relative mb-2 lg:overflow-hidden   overflow-scroll max-h-auto  lg:max-h-[200vh] w-full lg:gap-20 flex-wrap flex justify-center sm:pl-[156px] sm:pr-[156px] pt-[52px] sm:pb-[52px]">
      {searchList.map((data) => (
        <AnimatePage initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} >
          <motion.div whileHover={{ scale: 1.1}} key={data.id} className="sm:w-[160px] mx-5 sm:h-[240px] w-[100px] h-[200px] object-cover">
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
          </motion.div>

        </AnimatePage>

      ))}
      {loading && <Spinner />}
    </div>
  )
}

export default SearchList