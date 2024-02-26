import Dashboard from './components/Dashboard';
import MenuSuperior from './components/menuSuperior';
import MenuLateral from './components/menuLateral';

const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <MenuSuperior />
          <div className='flex'>
          <MenuLateral />
          <Dashboard />
          </div>
          
        </div>
      </div>

    </>

  )
}
export default HomePage;