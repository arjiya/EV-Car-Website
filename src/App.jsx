import { useState } from 'react';
import Background from './Background/Background';
import Hero from './Hero/Hero';
import NavBar from './NavBar/NavBar';


const App = () => {
  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"indulge",text2:"your passion"},
    {text1:"give in to",text2:"your passion"},
  ];

  const[heroCount,setHeroCount]=useState(0);
  const[playStatus,setPlayStatus]=useState(false);
  return (
    <div>
  
     <Background playStatus={playStatus} heroCount={heroCount}/>
    <NavBar/>
    <Hero
    setPlayStatus={setPlayStatus}
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
    />
    </div>

    
  )
}

export default App
