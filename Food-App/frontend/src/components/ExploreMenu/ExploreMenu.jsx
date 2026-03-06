import React from 'react'
import "./exploreMenu.css"
import { Menu_List } from '../../assets/asset'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Coose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevated your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {Menu_List.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name) }key={index}  className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
