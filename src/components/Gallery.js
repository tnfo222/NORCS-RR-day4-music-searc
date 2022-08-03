import GalleryItem from './GalleryItem'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import React from 'react'

function Gallery(){
    const data = useContext(DataContext)
    
    const display = data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div style={{'width':'100%'}}>
            {display}
        </div>
    )
}

export default Gallery
