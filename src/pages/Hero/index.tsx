"use client"
import Link from '../../assets/main.jpg'


const Hero = () => {

    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                            Hungry Bids Restaurant
                        </h1>
                        <div className='md:flex align-middle justify-center lg:justify-start'>
                            <a href='#about-section' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>Our menu</a>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <img src={Link} alt="nothing" width={'50%'} height={405} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
