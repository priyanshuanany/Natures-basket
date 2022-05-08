import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Slider } from './blog/slider/slider'
import { Sliderdata } from './blog/slider/sliderdata'
import { Category } from './blog/category/category'
import { Trend } from './blog/trend/trend'
import { Side_txt_bar } from './blog/side-txt/side-txt'
import { Blog } from './blog/blog'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './blog/detail/detail'
import { BlogRouter } from './blog/blogrouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
    <BlogRouter></BlogRouter>
   
     
    </div>
  )
}

export default App
