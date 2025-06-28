import './App.css'
import pizzaImage from './assets/pizza-menu.jpg'
import main from './assets/main.jpg'
import frokostMenu from './assets/frokost-menu.jpg'
import shawarmaMenu from './assets/shawarma-menu.jpg'


function App() {

  return (
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
              <img src={main} alt={'pizza-menu'}/>
              <img src={shawarmaMenu} alt={'pizza-menu'}/>
              <img src={pizzaImage} alt={'pizza-menu'}/>
              <img src={frokostMenu} alt={'pizza-menu'}/>
          </div>
      </div>
  )
}

export default App
