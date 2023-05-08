import React from 'react';
import { FaBeer, FaFacebookSquare, FaGlobe, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import AnimatePage from '../animation/AnimatePage';

const Footer = ({whichComp}) => {
  return (
    <>
      <footer className={'dark:bg-gray-700/90 bg-[#000000de] dark:text-white m-auto w-full h-[200px] lg:h-[200px]' }>
        <AnimatePage initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="flex justify-center  w-full ">
            <div className="h-full ml-2 md:w-1/2 ">
              <h4 className='text-[#757575] dark:text-white mt-[17px]'>Questions? Call 1-844-505-2993</h4>
              <div className="flex mt-[16px] font-roboto dark:text-white flex-row text-[13px] text-[#757575] flex-wrap">
                <h6 className='mr-20 mb-1'>FAQ</h6>
                <h6 className='mr-20 mb-1'>Help Center</h6>
                <h6 className='mr-20 mb-1'>Terms of Use</h6>
                <h6 className='mr-6'>Privacy</h6>
                <h6 className='mr-6'>Cookie Preferences</h6>
                <h6 className='mr-6'>Corporate Information</h6>
              </div>
              <div className="flex flex-wrap mr-20 justify-start dark:text-white sm:mt-[10px] mt-[10px] text-[25px] mb-4 gap-[20px] text-[#808080]">
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div className="flex items-center  rounded-[4px]  border p-2 dark:text-white border-[#333333] bg-black h-[45px] w-[128px]">
                <FaGlobe className='text-[20px]' />
                <select className=' bg-black' name="" id="">
                  <option value="">English</option>
                  <option value="">hindi</option>
                  <option value="">malayalam</option>
                </select>
              </div>
            </div>
          </div>
        </AnimatePage>
      </footer>
    </>
  );
};

export default Footer;
