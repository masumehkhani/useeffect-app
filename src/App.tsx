import BackCard from "./components/BackCard"
import LoginForm from "./components/LoginForm"
import Navbar from "./components/Navbar"
import {useState} from 'react'


function App() {
const [isLogin, setIsLogin] = useState(false)
  return (
    <>
     <Navbar/>
     {isLogin && <BackCard/>}
     {!isLogin && <LoginForm/>}
    </>
  )
}

export default App
