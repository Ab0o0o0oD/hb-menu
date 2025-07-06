import { useState } from 'react'
import pizzaIcon from '../../assets/pizza-icon.svg'
import shawarmaIcon from '../../assets/shawarma-icon.svg'
import breakfastIcon from '../../assets/breakfast.svg'
import pizzaMenu from '../../assets/pizza-menu.jpg'
import shawarmaMenu from '../../assets/shawarma-menu.jpg'
import breakfastMenu from '../../assets/frokost-menu.jpg'
import {TabBtn} from "@/components/ui/TabBtn.tsx";

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState('shawarma')
    return (
        <>
            <div className="w-full border-b border-gray-200 dark:border-neutral-700">
                <nav className="flex justify-between md:w-1/2" aria-label="Tabs">
                    <TabBtn label={'shawarma'} setActiveTab={setActiveTab} activeTab={activeTab} iconSrc={shawarmaIcon}/>
                    <TabBtn label={'pizza'} setActiveTab={setActiveTab} activeTab={activeTab} iconSrc={pizzaIcon}/>
                    <TabBtn label={'breakfast'} setActiveTab={setActiveTab} activeTab={activeTab} iconSrc={breakfastIcon}/>
                </nav>
            </div>

            <div className="mt-3">
                {activeTab === 'shawarma' && (
                    <div>
                           <img src={shawarmaMenu} alt={'pizzaMenu'} />
                    </div>
                )}
                {activeTab === 'pizza' && (
                    <div>
                            <img src={pizzaMenu} alt={'pizzaMenu'}/>

                    </div>
                )}
                {activeTab === 'breakfast' && (
                    <div>
                            <img src={breakfastMenu} alt={'breakfastMenu'}/>

                    </div>
                    )}
            </div>
        </>
    )
}
