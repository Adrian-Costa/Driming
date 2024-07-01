
import { HomePage } from "./pages/HomePage"
import { register } from "swiper/element/bundle"
import "./styles/Reset.scss"
import "./styles/GlobalStyles.scss"
register() 
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

function App() {
  return (
    <>
      <HomePage />
    </>
  )
}

export default App
