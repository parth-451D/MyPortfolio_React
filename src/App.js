import React from 'react';
import MyNavbar from './components/navbar/MyNavbar';
import MyCarousal from './components/carousal/MyCarousal';
import TitleMessage from "./components/title/TitleMessage";


const App = () => {
  return (
    <div className="App">
    <MyNavbar />
    <MyCarousal />
    <TitleMessage/>

    </div>
  )
}

export default App
