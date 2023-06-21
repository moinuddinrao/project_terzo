import styles from "../style";
import { logoIcon } from "../assets";

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} flex-col text-center lg:px-80 sm:px-0`}>
        <div className="absolute z-[0] w-[100%] h-[100%] bg-gradient" />
        <div className="my-5 lg:top-20 w-[20%]">
            <img src={logoIcon} alt="Logo Icon" className="w-[100%]" />
        </div >
        <h2 className={styles.heading2}>Speed to value. Get up and running in weeks, not months or years.</h2>
        <div className="rounded-full btn sm:py-3 sm:px-6 py-2 px-4 sm:mt-10 mt-5">
            <a href="#demo" className="text-black font-roboto font-medium md:text-[20px] sm:text-[18px] text-[16px]">Book a demo</a>
        </div>
    </section>
);

export default CTA;