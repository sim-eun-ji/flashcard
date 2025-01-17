import '@fortawesome/fontawesome-free/js/all.js'
import { useState } from "react";
import Home from "./components/Home";
import mockData from "./data/mockData";
import DetailList from "./components/DetailList";
import Learning from "./components/Learning";
import Result from "./components/Result";
import './App.css';

const App = () => {
  const [selected,setSelected] = useState(null);
  const [learningMode,setLearningMode] = useState(false);
  const [exitMode,setExitMode] = useState(false);
  const handleSelected = (obj) => {
    setSelected(obj);
  }
  const handleChangeMode = (data) =>{
    setLearningMode(data);
  }
  return (
    
    <div className="app">
      <div className='head-bar'>
        <p>14:30</p>
        <div className='icon'>
        <i class="fas fa-signal"></i>
        <i class="fas fa-wifi"></i>
        <i class="fas fa-battery-three-quarters"></i>
        </div>
      </div>
      {
        !selected &&
      <Home categories={mockData.categories} onSelected={handleSelected}/>
      }     
      {
        selected && !learningMode &&
        <DetailList
          selected={selected}
          onSelected={handleSelected}
          onChangeMode = {handleChangeMode}/>
      }
      {
        learningMode && !exitMode &&
        <Learning
          flashcards = {selected.flashcards}
          onExit={()=>{
            setSelected(null);
            setLearningMode(false);
          }}
          onResult={()=>{
            setExitMode(true);
          }}
        />
      }
      {
        exitMode &&
        <Result 
          onExit={()=>{
            setSelected(null);
            setLearningMode(false);
            setExitMode(false);
        }}/>
      }
    </div>
  );
};

export default App;