import styles from "../style";
import { hero } from "../assets";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col gap-10 ${styles.paddingY}`}
        >
            <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
                <h1 className={`${styles.heading1} sm:mr-10 mr-0`}>
                    Unlock financial insights hidden in your contracts
                </h1>

                <p className={`${styles.paragraph} mt-5`}>
                    Discover data across your contract ecosystem to drive savings
                    and reduce risk through Terzo AI
                </p>

                <div className="rounded-full btn sm:py-3 sm:px-6 py-2 px-4 mt-5">
                    <a href="#demo" className="text-white font-roboto font-medium md:text-[20px] sm:text-[18px] text-[16px]">Book a Demo</a>
                </div>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 sm:my-5 my-10 relative`}>
                <div className="absolute z-[0] w-[100%] h-[100%] bg-gradient " />
                <img src={hero} alt="hero" />
            </div>
        </section>
    );
};

export default Hero;