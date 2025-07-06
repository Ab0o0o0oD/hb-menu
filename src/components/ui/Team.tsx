import falafel from './../../assets/falafel-rull.jpeg';
import shawarma from './../../assets/shawarmarull.jpg';
import crips from './../../assets/cripsy-rull.png';
import hugryBirds from './../../assets/hungry-birds.png';
export const Team = () => {
    return (
        <section className="py-20 px-4">

            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                            src={falafel}
                            alt="falafel"
                            className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"/>

                    </div>

                </div>
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                            src={shawarma}
                            alt="shawarma"
                            className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"/>

                    </div>

                </div>
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                            src={crips}
                            alt={'crips'}
                            className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"/>

                    </div>

                </div>
                {/* ... more team member cards ... */}
            </div>
        </section>
    );
};
