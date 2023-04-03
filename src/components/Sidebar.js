import { useSelector } from "react-redux";

const Sidebar = () => {

  const val= useSelector((store) => store.app.isMenuOpen );
  console.log(val)


  return  ( val === false ) ? (<></> ): (

    <div className='col-span-2 shadow-lg p-5'>
      
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Vedio</li>
        <li>Live</li>
        
      </ul>

      <h1 className='font-bold' > Subscription </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        
      </ul>

      <h1 className='font-bold' > Watch Later </h1>
      <ul>
      <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Live</li>
        
      </ul>
    </div>
  )
}

export default Sidebar;
