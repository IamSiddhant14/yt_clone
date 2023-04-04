import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const val= useSelector((store) => store.app.isMenuOpen );
  // console.log(val);

  // Early return is also possible ove here
  // if( val ){
  //   return ;
  // }


  return  ( val === false ) ? (<></> ): (

    <div className='col-span-2 shadow-lg p-5'>
      
      <ul>
         <li><Link to="/">Home</Link></li> 
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
