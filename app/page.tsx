import Dashboard from './components/Dashboard';
import MenuSuperior from './components/menuSuperior';
import MenuLateral from './components/menuLateral';
import SearchBar from './components/searchBar';

const HomePage = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <MenuLateral />
        <div className='h-screen'>
        <div className='h-[80px]'>
          <SearchBar />
        </div>
          <MenuSuperior />
          <Dashboard />
        </div>
      </div>
    </>
  )
}
export default HomePage;