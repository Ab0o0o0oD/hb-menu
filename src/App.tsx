import './App.css'
import {Header} from "@/pages/Header";
import landing from './assets/landing-image.png'
import {Tabs} from "@/components/ui/Tabs.tsx";
import {Team} from "@/components/ui/Team.tsx";
import {Footer} from "@/components/footer/Footer.tsx";

function App() {
    return (
        <div className="px-5 py-1 md:px-10 flex flex-col xl:px-100 gap-5">
            <div className={"text-center text-white"}>
                <Header/>
            </div>

            <div className="min-h-screen flex flex-col gap-10">
                <div className="flex flex-col md:flex-row">
                    <div
                        className={"w-full md:w-1/2 md:p-10 items-center flex justify-center text-black text-center sm:py-4"}>
                        <div className='col-span-6'>
                            <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                                Welcome to Hungry Birds
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Taste the Authentic Syrian Delight! Indulge in the rich flavors of juicy Shawarma,
                                golden
                                Crispy bites, and mouthwatering Falafel — all made fresh, the Syrian way. Your
                                cravings, our
                                passion!</p>
                            <div className='md:flex align-middle justify-center lg:justify-end'>
                                <a href='#menu-section'
                                   className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>
                                    Explore our menu</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="hidden md:flex w-full md:w-1/2  text-white text-center md:overflow-hidden md:rounded-b-full -rotate-8"
                        // style={{
                        //     background: `url(${landing}) no-repeat center center / cover`
                        // }}
                    >
                        <img src={landing} alt="Face" className="w-full h-full object-cover object-center"/>
                    </div>
                </div>
                <div className="flex flex-1  items-start text-white pt-20 md:pt-0">
                    <Team/>
                </div>

            </div>
            <div
                id="menu-section"
                className="min-h-screen pt-10 h-auto flex items-start justify-start flex-col text-white"
            >
                <h1 className="text-3xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                    Our Menu:
                </h1>
                <Tabs/>
            </div>
            <Footer/>
        </div>



        // <div className="flex">
        //     <header className="">
        //         <Header/>
        //     </header>
        //     <main>
        //         <Hero/>
        //     </main>
        // </div>
    )
}

export default App
