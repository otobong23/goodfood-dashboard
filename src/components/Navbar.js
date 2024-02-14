import React, {useRef, useEffect, useState} from 'react'
import searchIcon from '../images/Icon.svg'
import burger from '../images/Emoticon.png'
import cheveronDown from '../images/chevron_down.svg'
import notificationIcon from '../images/Notification.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar({setFunc, setOptionValue}) {
   const headerRef = useRef();
   const [height, setHeight] = useState(0)
   const searchRef = useRef()
   const [search, setSearch] = useState('')
   useEffect(() => {
      let h = headerRef.current.offsetHeight;
      setFunc(h)

      window.onload = () => {
         h = headerRef.current.offsetHeight;
         setHeight(h)
         setFunc(height)
      }
      window.onresize = () => {
         h = headerRef.current.offsetHeight;
         setHeight(h)
         setFunc(height)
      }
   })
   
  return (
   <>
   <header ref={headerRef}>
      <div className="container-xl flex justify-between border-b border-[#C8CBD9]">
         <div className="logo flex lg:hidden flex-1 pl-5 lg:pl-10 gap-2 items-center lg:bg-[#F1F2F7] md:min-w-60 max-w-72 py-5 md:py-7 lg:py-0">
            <div className="G bg-[#5A67BA] flex justify-center items-center w-7 h-7 rounded-full"><h4 className='text-base font-semibold leading-none text-white'>G</h4></div>
            <span className="word text-[#5A67BA] font-semibold text-base leading-none">GOODFOOD</span>
         </div>
         <div className="search-bar flex-[2] py-4 pl-10 hidden lg:block">
            <div className="search flex px-[14px] py-[8px] items-center rounded-md bg-[#F6F6FB] w-[80%] max-w-[625px] relative">
               <input type="text" name='search' id="search" placeholder='Search' className='outline-none border-0 text-sm text-[#1F384C] w-full placeholder:text-[#1F384C] bg-transparent mr-1' value={search} ref={searchRef} onInput={() => setSearch(searchRef.current.value)} />
               <button id="search-button-icon" onClick={() => console.log(search)}><img src={searchIcon} alt="search-icon" /></button>
            </div>
         </div>
         <section className='flex items-center justify-end flex-1 gap-5 px-5 lg:gap-8 lg:px-10'>
            <button id="profile-button">
               <div className="flex items-center profile">
                  <div className="profile-icon flex justify-center items-center rounded-full w-8 h-8 bg-[#FFE6CC] ml-3">
                     <img src={burger} alt="profile-icon-burger" />
                  </div>
                  <h2 className='font-normal text-base leading-none text-[#1F384C] ml-1 hidden md:block'>Delicious Burger</h2>
                  <div className="hidden icon md:block"><img src={cheveronDown} alt="cheveron-down" /></div>
               </div>
            </button>
            <button id="notification-button">
               <div className="flex justify-center notification">
                  <img src={notificationIcon} alt="notification-bar" />
               </div>
            </button>
            <button id='navBar' className='lg:hidden text-[#082431]' onClick={setOptionValue}>
               <FontAwesomeIcon icon={'fa-solid fa-bars'}></FontAwesomeIcon>
            </button>
         </section>
      </div>
   </header>
   </>
  )
}
