import React, { useContext, useEffect, useState } from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { FaMixer, FaSearch, FaXbox } from 'react-icons/fa'
import Banner from '../assets/banner.png'
import AnimatePage from '../animation/AnimatePage'
import Alert from '../comp/Alert'
import { AlertContext } from '../contaxt/alertContext'
import { useOpen } from '../contaxt/alertContext'
import axios from 'axios'
import Spinner from '../comp/Spinner'
import SearchList from './SearchList'
import { useDebounce } from '../hooks/useDebouncy'
const HomePage = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [loading, setLoader] = useState(false);
  const [title, setTile] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [movie, setMovie] = useState([]);
  const { open } = useOpen()
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=64fce4404d5da5e36af21589af67c971&language=en-US&page=1&include_adult=false";
  const API_URL2 =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=64fce4404d5da5e36af21589af67c971";
  const handleChange = (event) => {
    let val = event.target.value

    setSearchInputValue(event.target.value);


    // clearTimeout(timeout)
    if (val === null) {
      console.log("null");
      setLoader(false)
    } else {
      setLoader(true)
    }
    console.log(val);
  };
  const clearSearch = () => {
    setSearchInputValue("");
    setSearchList([]);
    setLoader(false)
  };
  const fetchMovieData = async () => {
    try {
      const response = await axios(API_URL2);
      if (searchInputValue.length < 2 || searchInputValue.length < 0) { setLoader(false) }
      setMovie(response.data.results);
      console.log(movie);

    } catch (error) {
      console.error(error);


    }
  }
  const fetchSearchList = async () => {
    if (searchInputValue.length === 1 || searchInputValue.length === 0) { setLoader(false) }


    if (searchInputValue === "") {
      searchList([])
    }
    try {
      const response = await axios(API_URL, {
        params: {
          query: searchInputValue,
        },
      });
      setTimeout(() => {
        setLoader(false)
      }, 300)
      setSearchList(response.data.results.filter((movie) => {
        return movie?.poster_path !== null;
      }));


    } catch (error) {
      console.error(error);
      setLoader(false);

    }
  };

  useDebounce(fetchSearchList,[searchInputValue])
 useEffect(() => {
  fetchMovieData()
 }, [])
 




  return (
    <>
      <Header logoutButton={true} marginRight="150px" />
      {open && <Alert />}
      <div className="flex flex-col w-full h-[250vh] dark:bg-white/40 bg-[#000]/50">
        <AnimatePage initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} >
          <div className="mt-[110px] flex justify-center w-full">
            <div className="relative w-[300px] sm:w-[500px] md:w-[846px] ">
              <FaSearch className='absolute top-3  left-5 dark:text-white text-black ' />
              <input value={searchInputValue} onChange={handleChange} type="text" className='font-main font-normal dark:bg-slate-700 dark:text-white text-black w-full pl-[45px] py-[10px] rounded-[20px] outline-none' placeholder='Search movies' />
              {searchInputValue && <span onClick={clearSearch} className=' absolute top-[10px] font-bold cursor-pointer text-[16px] right-5 dark:text-white text-black' >✖</span>}
            </div>
          </div>
        </AnimatePage>

        {<SearchList searchList={searchInputValue.length > 0 || searchInputValue !== "" ? searchList : movie} loading={loading} />}
      </div>
      <Footer whichComp={false} />
    </>
  )
}

export default HomePage