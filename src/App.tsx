import './App.css'
import pizzaImage from './assets/pizza-menu.jpg'
import main from './assets/main.jpg'
import frokostMenu from './assets/frokost-menu.jpg'
import shawarmaMenu from './assets/shawarma-menu.jpg'
import {Tabs} from "@/components/Tabs.tsx";


function App() {
    const tableItemss = [
        {name: "Pizza", anchor: "#pizza"},
        {name: "Shawarma", anchor: "#shawarma"},
        {name: "Frokost", anchor: "#frokost"}
    ];
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center ">
            <div className="w-full max-w-sm md:max-w-3xl">
                <Tabs tabItems={tableItemss}/>
                <img src={main} alt={'pizza-menu'}/>
                <div id="shawarma">
                    <img src={shawarmaMenu} alt={'shawarma-menu'}/>
                </div>
                <div id="pizza">
                    <img src={pizzaImage} alt={'pizza-menu'}/>
                </div>
                <div id="frokost">
                    <img src={frokostMenu} alt={'pizza-menu'}/>
                </div>
            </div>

        </div>
    )
}

export default App
