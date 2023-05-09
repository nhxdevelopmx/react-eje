import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp =() =>{
    const[categories, setCategories] = useState([' One Punch']);

    const onAddCategory = (newCategory) =>{
      //categories.push(newCategory);
      //console.log(newCategory);
      if(categories.includes(newCategory)) return;
      setCategories([newCategory,...categories]);
      //setCategories(cat =>[...cat, 'valor']);
    }

    return (
        <>
          {/*Titulo */}
          <h1>GifExpertApp</h1>
          {/*Input */}
          
          <AddCategory
           /*setCategories={setCategories}*/
             onNewCategory={(value) => onAddCategory(value)}
            
           ></AddCategory>

          {/*Listado de Gif*/}
            {/*Gif Item */}
            {/*<button onClick={onAddCategory}>Agregar</button>*/}
      
            {categories.map(( category) =>
               (
               <GifGrid key ={category} category ={category}></GifGrid>
               )
               )
            }
         
        </>
    )
}