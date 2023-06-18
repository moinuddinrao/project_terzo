import styles from "../style";
import { hero } from "../assets";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
                <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className={`flex-1 ${styles.heading1}`}>
                        Unlock financial insights hidden in your contracts
                    </h1>
                </div>

                <p className={`${styles.paragraph} mt-5 mr-10`}>
                    Discover data across your contract ecosystem to drive savings
                    and reduce risk through Terzo AI
                </p>

                <div className="rounded-full btn py-3 px-6 mt-10">
                    <a href="#demo" className="text-white text-[16px] font-roboto font-medium">Book a Demo</a>
                </div>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />

                <img src={hero} alt="hero" className="w-[100%] h-[100%] z-[5]" />
            </div>
        </section>
    );
};

export default Hero;