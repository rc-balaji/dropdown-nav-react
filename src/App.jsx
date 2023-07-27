
import Nav from './Nav'
import {BrowserRouter ,Routes,Route} from "react-router-dom";

import Home from './components/Home'
import Picking from './components/Picking'
import IT01 from './components/It01'
import Pro1 from './components/Pro1'
import Pro2 from './components/Pro2'
import Pro3 from './components/Pro3'
import NotFound from './components/NotFound'
import Login from './components/login'
import Sigh from './components/signup'
import Dash from './components/Dash'



function App() {

  const LoggIn=false;
  const Public=()=>{
    return(
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pro1" element={<Pro1/>}/>
      <Route path="/pro2" element={<Pro2/>}/>
      <Route path="/pro3" element={<Pro3/>}/>
      <Route path="/it01" element={<IT01/>}/>
      <Route path="/picking" element={<Picking/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<Sigh/>}/>
      <Route path="*" element={<NotFound/>}/>
  </Routes>
    )
  }

  const Private=()=>{
    return(
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pro1" element={<Pro1/>}/>
      <Route path="/pro2" element={<Pro2/>}/>
      <Route path="/pro3" element={<Pro3/>}/>
      <Route path="/it01" element={<IT01/>}/>
      <Route path="/picking" element={<Picking/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<Sigh/>}/>
      <Route path="/dash" element={<Dash/>}/>
      <Route path="*" element={<NotFound/>}/>
  </Routes>
    )
  }

  return (
    <>
    <div>
   

<BrowserRouter basename='/'>
<Nav />
      {
        LoggIn===true?<Private/>:<Public/>
      }
</BrowserRouter>
    </div>
    </>
  )
}

export default App
