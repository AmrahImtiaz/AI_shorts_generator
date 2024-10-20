import React, { useState } from 'react'
import Image from 'next/image';

function SelectStyle({onUserSelect}) {
    const styleOptions=[
        {
            name:'Realistic',
            image:'/real.jpg'
        },
        {
            name:'Cartoon',
            image:'/cartoon.png'
        },  {
            name:'Anime',
            image:'/anime.jpg'
        },  {
            name:'Comic',
            image:'/comic.jpg'
        }, 
        {
            name:'Realistic Portrate',
            image:'/realistic portrate.jpg'
        },
        {
             name:'Food',
             image:'/food.jpg'
        },
        {
             name:'Watercolor',
             image:'/watercolor.jpg'
        },
        {
             name:'American Manga',
             image:'/american manga.jpg'
        },
        {
            name:'GTA',
            image:'/gta.jpg'
        }
    ]

    const [selectedOption,setSelectedOption]=useState();
  return (
    <div>        
    <h2 className='font-bold text-2xl text-primary'>Style</h2>
    <p className='text-gray-500'> Select your video style </p>
    <div className='grid grid-cols-2 md:grip-col-3 lg:grid-cols-4 xl:grid ' >
        {styleOptions.map((item, index) => (
        <div className={`relative hover:scale-105 transition-all cursor-pointer
        ${selectedOption==item.name && 'border-4 border-primary rounded-lg'}`}>

          <div className="p-5" >
            <Image src={item.image} width={300} height={300} alt={item.name} 
            className = 'h-48 object-cover rounded-lg w-full'

            onClick={()=>{
                setSelectedOption(item.name)
                onUserSelect('imageStyle',item.name)
            }}
            />
            <h2 className='p-2 absolute bg-black bottom-0 w-120 rounded-lg text-white text-center'>{item.name}</h2>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle