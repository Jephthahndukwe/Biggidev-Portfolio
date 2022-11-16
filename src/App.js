import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About_section from './components/About_section';
import Parent from './components/Parent';
import ReadParent from './components/ReadParent';
import Work2 from './components/work2';
import ContactTwo from './components/ContactTwo';
import DarkMode from './components/DarkMode';
import Resume from './components/Resume';



function App() {
  return (
    <div className="App">
  <Routes>
    <Route path='/' element={<Parent />} />
    <Route path='About_section' element={<About_section/>} />
    <Route path='/Reads' element={<ReadParent/>} />
    <Route path='/work2' element={<Work2/>} />
    <Route path='/ContactTwo' element={<ContactTwo/>} />
    <Route path='/resume' element={<Resume/>} />
  </Routes>
  {/* <DarkMode/> */}
    </div>
  );
}

export default App;