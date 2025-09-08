import Navbar from "../components/common/Navbar"
import Hero from "../components/home/Hero"

const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <Navbar onNavigate={onNavigate} />
      <Hero onNavigate={onNavigate } />
    </div>
  )
}
export default Home
