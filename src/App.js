import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faList,faLocationCrosshairs,faSearch,faUtensils,faHotel,faBagShopping,faPills,faCar,faLightbulb,faLocationDot} from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <>
    <div className='h-10 w-full px-4 border-b-[1px] flex items-center justify-between text-gray-400'>
      <div className=' flex space-x-4 items-center text-sm'>
        <select  >
          <option>
            EN
          </option>
          <option>
            BN
          </option>
          <option>
            AN
          </option>
        </select>
        <select >
          <option>
            USD
          </option>
          <option>
            EU
          </option>
        </select>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className=' flex space-x-4 items-center text-sm '>
        <p>+1 234 567 8900</p>
        <a href='#'>Sign In</a>        
        <a href='#'>Register</a>        
      </div>
    </div>
      <Navbar/>
      <Hero/>
      <div className='max-w-6xl  mx-auto pt-40 pb-16 flex space-y-6 flex-col items-center'>
        <p className='font-medium text-gray-800 text-xl tracking-wider'>HOW IT WORKS</p>
        <p className='font-normal text-textGrey text-sm tracking-wider'>Learn More about how our website works</p>
        <div className='w-full '>
          <ul className=' grid grid-cols-3 gap-4'>
            <HowItWorksCard icon={faLightbulb} label={"Choose what to Do"} description={"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."}/>
            <HowItWorksCard icon={faSearch} label={"Find what you want"} description={"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."}/>
            <HowItWorksCard icon={faLocationDot} label={"Explore amazing place"} description={"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."}/>
            
          </ul>
        </div>
      </div>
    </>
    
  );
}

export default App;

const NavbarButton =( {label})=> {
  return(
    <li className='uppercase font-medium text-textGrey hover:text-themeRed duration-300'>
      <a href='#'>
        {label}
      </a>
    </li>
  )
}
const HowItWorksCard =( {label,description,icon})=> {
  return(
    <li className='flex flex-col gap-4 text-center items-center px-6 border-2 py-10 group hover:bg-themeRed duration-700 '>
              <div className='rounded-full bg-lightGray group-hover:bg-white h-20 w-20 flex items-center justify-center '>
              <FontAwesomeIcon icon={icon} className='h-10 group-hover:text-themeRed'/>
              </div>
                <p className='font-medium text-gray-800 text-base tracking-wide group-hover:text-white'>{label}</p>
                <p className='font-normal text-gray-500 text-sm group-hover:text-white'>{description}</p>
                <button className='text-xs border-2  py-2 px-4 group-hover:text-white'>Read More</button>
            </li>
  )
}
const HeroCard =( {label,description,icon})=> {
  return(
    <li className='aspect-5/4 h-full bg-white rounded hover:bg-themeRed text-gray-600 duration-300 select-none group shadow-md hover:text-white items-center flex flex-col justify-center space-y-3 text-sm'>
                <FontAwesomeIcon className='h-10' icon={icon}/>
                <p className='font-medium'>{label}</p>
                <p className='text-textGrey text-sm group-hover:text-white'>{description}</p>
            </li>
  )
}
const Hero =( {label})=> {
  return(
    <div className='h-256 w-full relative  flex justify-center' >
        <img className='object-cover h-full w-full ' src='https://wallpapers.com/images/hd/aerial-city-view-p83u5jdzdjgesbxo.jpg'></img>
        <div className='h-full w-full absolute inset-0 bg-white opacity-20'></div>
        <HeroContent/>
        <div className='h-40  absolute -bottom-16 max-w-6xl flex'>
          <ul className='flex flex-row justify-between space-x-6'>
            <HeroCard icon={faUtensils} label={"Restaurant"} description={"150 listings"}/>
            <HeroCard icon={faBagShopping} label={"Destination"} description={"214 listings"}/>
            <HeroCard icon={faHotel} label={"Hotels"} description={"185 listings"}/>
            <HeroCard icon={faPills} label={"HealthCare"} description={"200 listings"}/>
            <HeroCard icon={faCar} label={"Automation"} description={"120 listings"}/>
          </ul>
        </div>
      </div>
  )
}


const HeroContent =( {label})=> {
  return(
    <div className='max-w-6xl  absolute top-0 text-white  text-center pt-36 '>
          <h1 className='text-5xl font-bold tracking-widest '>BEST PLACE TO FIND AND EXPLORE <br/> THAT ALL YOU NEED</h1>
          <p className='pt-10 tracking-wide'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
          <div className='flex justify-between space-x-8 pt-16'>
          <SearchBar  />
          <button className='flex items-center rounded justify-center gap-4 w-40 bg-themeRed hover:bg-red-500 text-xs '>
            <p>Search</p>
            <FontAwesomeIcon icon={faSearch}/>
          </button>
          </div>
        </div>
  )
}
const SearchBarItem =( {label,icon})=> {
  return(
    <div className='flex-row space-x-2  justify-between w-full flex items-center bg-white text-black py-4 px-6 border-r-2'>
              <p className=' font-semibold' >{label}</p>
              <input className='w-full  '></input>
            <FontAwesomeIcon  icon={icon} />
            </div>
  )
}
const SearchBar =( {label})=> {
  return(
    <div className='flex gap-0 w-full '>
            <SearchBarItem label={"What?"} icon={faList}/>
            <SearchBarItem label={"Location"} icon={faLocationCrosshairs}/>
    </div>
  )
}

const Navbar = ()=>{
  return (<div className="max-w-6xl text-textGray mx-auto flex items-center justify-between  py-8">
    <a href='#' className='font-bold text-xl text-black'>List<span className='text-themeRed'>Race</span></a>
    <nav >
     <ul className='flex gap-10'>
       <NavbarButton label={"Home"}/>
       <NavbarButton label={"How It Works"}/>
       <NavbarButton label={"Explore"}/>
       <NavbarButton label={"Review"}/>
       <NavbarButton label={"Blog"}/>
       <NavbarButton label={"Contact"}/>
       
     </ul>
    </nav>
   </div>)
}