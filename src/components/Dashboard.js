import React, {useState, useRef, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const MENU = [
  {
    URL: './',
    text: 'Dashboard',
    icon: 'fa-solid fa-square-poll-vertical',
    // active: true
  },
  {
    URL: './fooodOrder',
    text: 'Food Order',
    icon: 'fa-solid fa-cart-shopping'
  },
  {
    URL: './manageMenu',
    text: 'Manage Menu',
    icon: 'fa-solid fa-file-lines'
  },
  {
    URL: './customerReview',
    text: 'Costumer Review',
    icon: 'fa-solid fa-comment-dots'
  }
];

const OTHERS = [
  {
    URL: './settings',
    text: 'Settings',
    icon: 'fa-solid fa-gear'
  },
  {
    URL: './payment',
    text: 'Payment',
    icon: 'fa-solid fa-wallet'
  },
  {
    URL: './account',
    text: 'Account',
    icon: 'fa-solid fa-user'
  },
  {
    URL: './help',
    text: 'Help',
    icon: 'fa-solid fa-circle-info'
  }
];


export default function Dashboard() {
  const activeNavLink = ({ isActive }) => {
    return {
      color: isActive ? '#707FDD' : '#C4C7DB'
    }
  }
  return (
    <div className='relative hidden w-1/4 overflow-hidden xl:w-1/3 dashboard-section min-w-60 max-w-72 lg:block'>
      <div className="context bg-[#F1F2F7] fixed w-1/4 xl:w-1/3 max-w-72 h-screen">
        <div className="flex items-center gap-2 px-10 py-5 border-b border-[#C8CBD9] logo">
          <div className="G bg-[#5A67BA] flex justify-center items-center w-7 h-7 rounded-full"><h4 className='text-base font-semibold leading-none text-white'>G</h4></div>
          <span className="word text-[#5A67BA] font-semibold text-base leading-none">GOODFOOD</span>
        </div>

        <div className="px-5 py-10 menu">
          <h2 className='font-normal text-sm leading-none pb-3 text-[#0824319c] px-5'>MENU</h2>
          <nav className="nav">
            <ul className="flex flex-col navList">
              {
                MENU.map((item, index) => (
                  <li className="navListItem" key={index}>
                    <NavLink to={item.URL} style={activeNavLink} className="navLink flex items-center w-full bg-transparent group/Link hover:bg-[#E4E7F4] active:bg-[#E4E7F4] gap-3 py-3 px-5 rounded-[5px] transition-all duration-300">
                      <div className="linkIcon">
                        <FontAwesomeIcon icon={item.icon} className=' text-inherit group-hover/Link:text-[#707FDD] transition-all duration-300' />
                      </div>
                      <h3 className='text-[#9EA3AB] group-hover/Link:text-[#5A6ACF] group-active/Link:text-[#5A6ACF] text-base leading-none font-medium transition-all duration-300'>{item.text}</h3>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>

        <div className="px-5 pb-10 others">
          <h2 className='font-normal text-sm leading-none pb-3 text-[#0824319c] px-5'>OTHERS</h2>
          <nav className="nav">
            <ul className="flex flex-col navList">
              {
                OTHERS.map((item, index) => (
                  <li className="navListItem" key={index}>
                    <NavLink to={item.URL} style={activeNavLink} className="navLink flex items-center w-full bg-transparent group/Link hover:bg-[#E4E7F4] active:bg-[#E4E7F4] gap-3 py-3 px-5 rounded-[5px] transition-all duration-300">
                      <div className="linkIcon">
                        <FontAwesomeIcon icon={item.icon} className='text-inherit group-hover/Link:text-[#707FDD] transition-all duration-300' />
                      </div>
                      <h3 className='text-[#9EA3AB] group-hover/Link:text-[#5A6ACF] group-active/Link:text-[#5A6ACF] text-base leading-none font-medium transition-all duration-300'>{item.text}</h3>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}


export const MobileDashboard = ({ value, optionValue, resetOptionValue }) => {
  const [newValue, setNewValue] = useState(value)
  const [newOptionValue, setNewOptionValue] = useState(optionValue)
  const MD = useRef(null)

  useEffect(() => {
    setNewValue(value);
    setNewOptionValue(optionValue)
    MD.current.style.transform = `translatey(${newValue}px)`;
    MD.current.style.height = (window.innerHeight - newValue) + 'px'
    MD.current.style.left = newOptionValue ? '0' : '-100%'

  }, [value, newValue, newOptionValue, optionValue])

  const activeNavLink = ({ isActive }) => {
    return {
      color: isActive ? '#707FDD' : '#C4C7DB'
    }
  }
  return (
    <>
      {/* mobile version of the dashboard begins here */}
      <section ref={MD} className={`mobile-dashboard-section w-screen block lg:hidden absolute top-0 left-0 transition-all duration-300`}>
        <div className="bg-[#F1F2F7] h-full">
          <div className="px-5 py-10 text-center menu">
            <h2 className='font-normal text-sm leading-none pb-3 text-[#0824319c] px-5'>MENU</h2>
            <nav className="nav">
              <ul className="flex flex-col navList">
                {
                  MENU.map((item, index) => (
                    <li className="navListItem" key={index}>
                      <NavLink to={item.URL} style={activeNavLink} className={`navLink flex items-center justify-center w-full bg-transparent group/Link hover:bg-[#E4E7F4] active:bg-[#E4E7F4] gap-3 py-3 px-5 rounded-[5px] transition-all duration-300`} onClick={resetOptionValue}>
                        <div className="linkIcon">
                          <FontAwesomeIcon icon={item.icon} className='text-inherit group-hover/Link:text-[#707FDD] transition-all duration-300' />
                        </div>
                        <h3 className='text-[#9EA3AB] group-hover/Link:text-[#5A6ACF] group-active/Link:text-[#5A6ACF] text-base leading-none font-medium transition-all duration-300'>{item.text}</h3>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>

          <div className="px-5 pb-10 others">
            <h2 className='font-normal text-sm text-center leading-none pb-3 text-[#0824319c] px-5'>OTHERS</h2>
            <nav className="nav">
              <ul className="flex flex-col navList">
                {
                  OTHERS.map((item, index) => (
                    <li className="navListItem" key={index}>
                      <NavLink to={item.URL} className="navLink flex items-center justify-center w-full bg-transparent group/Link hover:bg-[#E4E7F4] active:bg-[#E4E7F4] gap-3 py-3 px-5 rounded-[5px] transition-all duration-300" onClick={resetOptionValue}>
                        <div className="linkIcon">
                          <FontAwesomeIcon icon={item.icon} className='text-[#C4C7DB] group-hover/Link:text-[#707FDD] transition-all duration-300' />
                        </div>
                        <h3 className='text-[#9EA3AB] group-hover/Link:text-[#5A6ACF] group-active/Link:text-[#5A6ACF] text-base leading-none font-medium transition-all duration-300'>{item.text}</h3>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* mobile version of the dashboard ends here */}

    </>
  )
}
