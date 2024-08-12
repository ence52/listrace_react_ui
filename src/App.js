import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faList,faLocationCrosshairs,faSearch,faPhone,faUtensils,faHotel,faBagShopping,faPills,faCar,faLightbulb,faLocationDot,faShareAlt,faHeart,faStar} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <Explore/>
      <ReviewSection/>
      <NumbersSection/>
      <NewArticles/>
      <Contact/>
      <BottomNavbar/>
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
const Contact =( {label})=> {
  return(
    <div className='text-center bg-lightGray py-40 justify-center'>
        <p className='text-2xl tracking-wide font-medium uppercase'>do you want to add your business listing with us?</p>
        <p className='text-base pt-6 font-medium text-textGray'>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
        <div className='flex justify-center max-w-2xl mx-auto mt-16 shadow  hover:shadow-lg duration-300'>
          <input  className='h-16 w-full '></input>
          <button className='font-semibold w-56 rounded bg-themeRed hover:bg-red-500 text-white '><p>Create Account</p></button>
        </div>
      </div>
  )
}
const NewArticles =( {label})=> {
  return(
    <div className='text-center py-24 max-w-6xl  mx-auto'>
        <p className='text-2xl tracking-widest font-medium'>NEW AND ARTICLES</p>
        <p className='text-base pt-6 pb-20 text-textGray'>Always upto date with our latest News and Articles</p>
        <div className='pt-24 flex space-x-8 '>
          <NewArticlesCard label={"How to find your Desired Place more quickly"} description={"Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."} photoUrl={"https://lh5.googleusercontent.com/p/AF1QipMc1VJnUK3uJjE_NGwbl3vS6IWoPUFCInviQW43=w360-h240-n-k-no"}/>
          <NewArticlesCard label={"How to find your Desired Place more quickly"} description={"Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."} photoUrl={"https://rare-gallery.com/thumbs/513950-architecture.jpg"}/>
          <NewArticlesCard label={"How to find your Desired Place more quickly"} description={"Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."} photoUrl={"https://www.flypgs.com/blog/wp-content/uploads/2024/05/roma-ulusal-modern-sanat-galerisi.jpeg"}/>
          
        </div>
      </div>
  )
}
const NewArticlesCard =( {label,description,photoUrl})=> {
  return(
    <div className='w-full border shadow hover:shadow-xl text-start group duration-300 '>
            <img className='w-full object-cover' src={photoUrl}/>
            <div className='p-6 space-y-2 text-sm'> 
              <p className='text-base font-medium group-hover:text-themeRed duration-300'>{label}</p>
              <div className='text-textGray flex'> 
                <p className='border-r-[1px] pr-5'>Posted by <span className='text-textDarkGray font-semibold'>ADMIN</span> </p>
                <p className=' pl-5'>March,2045</p>
              </div>
              <p className='text-sm text-textGray'>
              {description}
              </p>
            </div>
          </div>
  )
}
const ReviewSection =( )=> {
  return(
    <div className='flex-col py-32 text-center'>
      <p className='text-2xl tracking-widest font-medium'>CLIENTS REVIEWS</p>
      <p className='text-base pt-6 pb-20 text-textGray'>What our client say about us</p>
      <ul className='flex h-96 w-full justify-center space-x-10'>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </ul>
      </div>
  )
}
const ReviewCard =( )=> {
  return(
    <li className=' aspect-square h-full  flex-col text-balance py-6 px-6 space-y-5 hover:shadow-xl content-center'>
    <div className='flex items-end space-x-4' >
      <img className='h-12 w-12 rounded-full' src='https://avatar.iran.liara.run/public/49'></img>
      <div className='text-start space-y-1'>
        <p className='font-semibold text-xl'>Tom Leakar</p>
        <p className='text-textGray text-base'>London, UK</p>
        <div className='flex space-x-2'>
        <FontAwesomeIcon icon={faStar} className='h-4 w-4 text-yellow-400'/>
        <FontAwesomeIcon icon={faStar} className='h-4 w-4 text-yellow-400'/>
        <FontAwesomeIcon icon={faStar} className='h-4 w-4 text-yellow-400'/>
        <FontAwesomeIcon icon={faStar} className='h-4 w-4 text-yellow-400'/>
        <FontAwesomeIcon icon={faStar} className='h-4 w-4 text-yellow-400'/>
        </div>
      </div>
    </div>
    <p className='text-base text-textGray'>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
      </p>
  </li>
  )
}
const NumbersSection =( {label})=> {
  return(
    <div  className='w-full h-96 relative bg-parallax-image space-x-10 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed'>
          <NumbersSectionItem label={"90K+"} description={"Listings"}/>
          <NumbersSectionItem label={"40K+"} description={"Listing Categories"}/>
          <NumbersSectionItem label={"65K+"} description={"Visitors"}/>
          <NumbersSectionItem label={"50K+"} description={"Happy Clients"}/>
      </div>
  )
}
const NumbersSectionItem =( {label,description})=> {
  return(
    <div className='text-center space-y-4 text-white'>
            <p className='text-6xl'>{label}</p>
            <p className='text-2xl'>{description}</p>
          </div>
  )
}
const Explore =( )=> {
  return(
    <div className='bg-lightGray flex flex-col text-center  text-textDarkGray py-24'>
        <p className='text-2xl tracking-widest font-medium'>EXPLORE</p>
        <p className='text-base pt-6 pb-20 text-textGray'>Explore New place, food, culture around the world and many more</p>
        <div className='max-w-6xl  mx-auto w-full  '>
          <ul className='grid grid-cols-3 gap-4 capitalize'>
          <ExploreCard photoUrl="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" label="Tommy Hilfinger Bar" isOpen={false} price={"5$-300$"} type={"Restaurent"} rate={"5.0"}/>
          <ExploreCard photoUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/484875937.jpg?k=478e43b57c362ccdab34c99ce512b99eca67e2a03dde2afd4c5a57da5fc71cb9&o=&hp=1" label="swim and dine resort" isOpen={true} price={"50$-500$"} type={"Hotel"} rate={"5.0"}/>
          <ExploreCard photoUrl="https://yalniziyigezdik.com/wp-content/uploads/2017/11/hallstatt-gol-manzara.jpg" label="europe tour" isOpen={false} price={"5k$-10k$"} type={"Destination"} rate={"5.0"}/>
          <ExploreCard photoUrl="https://www.zulkufarslan.av.tr/wp-content/uploads/2022/07/pexels-chris-goodwin-32870.jpg" label="bungalow with swimming pool" isOpen={false} price={"10k$-15k$"} type={"Real Estate"} rate={"5.0"}/>
          <ExploreCard photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Volkswagen_Karmann-Ghia_Type_14_coupe_(6106019298).jpg/1200px-Volkswagen_Karmann-Ghia_Type_14_coupe_(6106019298).jpg" label="vintage car expo" isOpen={true} price={"500$-1200$"} type={"Automation"} rate={"5.0"}/>
          <ExploreCard photoUrl="https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" label="thailand tour" isOpen={false} price={"5k$-10k$"} type={"Destination"} rate={"5.0"}/>
         
          </ul>
        </div>
      </div>
  )
}
const ExploreCard =( {label,rate,price,type,isOpen,photoUrl})=> {
  return(
    <li className='  text-textDarkGray bg-white text-start hover:shadow-xl duration-500 rounded-sm '>
              <img className='w-full' src={photoUrl}></img>
              <div className='px-4 py-4'>
              <p className='pt-3  '>{label}</p>
                <div className='flex justify-start py-4 text-xs items-center'> 
                  <p className='font-semibold text-white  py-1 rounded px-2 bg-blue-400'>{rate}</p>
                  <p className='border-r-[1px] px-3'>10 Ratings</p>
                  <p className='border-r-[1px]  px-3 '>Form <span className='text-themeRed'>{price}</span></p>
                  <p className='  px-3'>Restaurent </p>
                </div>
                <div className='flex space-x-4 text-xs border-b-[1px] pb-6 tracking-wide'>
                  <img className='h-10 w-10 rounded-full bg-fuchsia-400' src='https://avatar.iran.liara.run/public/49'></img>
                  <p className='pr-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                </div>
                <div className='text-sm  flex justify-between py-4 '>
                  <p className={isOpen ? 'text-green-500' : 'text-themeRed'}>{isOpen?'Open Now':'Close Now'}</p>
                  <div className='flex text-textGray space-x-4'>
                    <FontAwesomeIcon className='hover:text-themeRed' icon={faLocationDot}/>
                    <FontAwesomeIcon className='hover:text-themeRed' icon={faShareAlt}/>
                    <FontAwesomeIcon className='hover:text-themeRed' icon={faHeart}/>
                  </div>
                </div>
              </div>
            </li>
  )
}
const HowItWorks =( {label})=> {
  return(
    <div className='max-w-6xl  mx-auto pt-40 pb-16 flex space-y-6 flex-col items-center'>
        <p className='font-medium text-textDarkGray text-xl tracking-wider'>HOW IT WORKS</p>
        <p className='font-normal text-textGrey text-sm tracking-wider'>Learn More about how our website works</p>
        <div className='w-full '>
          <ul className=' grid grid-cols-3 gap-4'>
            <HowItWorksCard icon={faLightbulb} label={"Choose what to Do"} description={"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."}/>
            <HowItWorksCard icon={faSearch} label={"Find what you want"} description={"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."}/>
            <HowItWorksCard icon={faLocationDot} label={"Explore amazing place"} description={"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."}/>
            
          </ul>
        </div>
      </div>
  )
}
const TopBar =( {label})=> {
  return(
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
const SearchBarItem =( {label,icon,placeholder})=> {
  return(
    <div className='flex-row space-x-2  justify-between w-full flex items-center bg-white text-black py-4 px-6 border-r-2'>
              <p className=' font-medium' >{label}</p>
              <input className='w-full text-sm font-medium' placeholder={placeholder}></input>
            <FontAwesomeIcon  icon={icon} />
            </div>
  )
}
const SearchBar =( {label})=> {
  return(
    <div className='flex gap-0 w-full '>
            <SearchBarItem label={"What?"} icon={faList} placeholder={"Ex: palce, resturent, food, automobile"}/>
            <SearchBarItem label={"Location"} icon={faLocationCrosshairs} placeholder={"Ex: london, newyork, rome"}/>
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
const BottomNavbar = ()=>{
  return (<div className='max-w-6xl text-textGray mx-auto ' >
    <div className=" flex items-center justify-between py-12 border-b-[1px] ">
    <a href='#' className='font-bold text-xl text-black'>List<span className='text-themeRed'>Race</span></a>
    <nav >
     <ul className='flex gap-10'>
       <NavbarButton label={"How It Works"}/>
       <NavbarButton label={"Explore"}/>
       <NavbarButton label={"Review"}/>
       <NavbarButton label={"Blog"}/>
       <NavbarButton label={"Contact"}/>
       <NavbarButton label={"My Account"}/>
     </ul>
    </nav>
   </div>
   <div className='justify-between flex pt-12 capitalize text-sm items-center pb-40'>
      <p>© copyright. designed and developed by themesine</p>
      <ul className='flex space-x-4 text-textGray'>
        <li className='text-xs flex items-center pr-8 hover:text-themeRed duration-300'>
          <FontAwesomeIcon  icon={faPhone}/>
          <p>+1 (222) 777 8888</p>
        </li>
        <li className='h-8 w-8 bg-lightGray rounded-full flex justify-center items-center hover:text-white hover:bg-themeRed text-sm font-extralight duration-300'>
        <FontAwesomeIcon  icon={faFacebookF}/>
        </li>
        <li className='h-8 w-8 bg-lightGray rounded-full flex justify-center items-center hover:text-white hover:bg-themeRed text-sm font-extralight duration-300'>
        <FontAwesomeIcon  icon={faTwitter}/>
        </li>
        <li className='h-8 w-8 bg-lightGray rounded-full flex justify-center items-center hover:text-white hover:bg-themeRed text-sm font-extralight duration-300'>
        <FontAwesomeIcon  icon={faLinkedinIn}/>
        </li>
        <li className='h-8 w-8 bg-lightGray rounded-full flex justify-center items-center hover:text-white hover:bg-themeRed text-sm font-extralight duration-300'>
        <FontAwesomeIcon  icon={faGooglePlusG}/>
        </li>
        
      </ul>
   </div>
  </div>)
}