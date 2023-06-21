import Button from "./Button";
import styles from "../style";
import { businessBack, businessFront, dash1, dash2 } from "../assets";

const Business = () => (
    <section id="business">
        <div className={`${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
            <div className="spangroup">
                <div className="spanPrimary" />
                <div className="spanSecondary" />
            </div>
            <h2 className={`text-center my-10 ${styles.heading1}`}>
                Contract Intelligence to drive financial performance
            </h2>
            <div className={`flex ${styles.flexEnd} md:mt-32 sm:mt-24 mt-16 relative w-full`}>
                <img src={businessBack} alt="businessBack" className="w-[100%] h-[100%]" />
                <div className={`absolute ${styles.flexEnd} w-[75%] h-[75%]`}>
                    <img src={businessFront} alt="businessFront" className="absolute z-[1]" />
                </div>
                <div className="absolute z-[2] w-[100%] h-[100%] bg-black-gradient " />
            </div>

            <p className={`${styles.heading3} text-center max-w-[768px] mt-10`}>
                Terzo helps leaders <span className="font-semibold text-purple">track every dollar</span> coming in and going out of the organization
            </p>
            <div className="rounded-full btn sm:py-3 sm:px-6 py-2 px-4 sm:mt-10 mt-5">
                <a href="#more" className="text-black font-roboto font-medium md:text-[20px] sm:text-[18px] text-[16px]">Learn More</a>
            </div>
        </div>
        {/* Dashboard 1 */}
        <div className={`flex md:flex-row flex-col gap-10 ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
            <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                <h2 className={`${styles.heading2}`}>
                    Instant access to data to drive smarter financial decisions
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                    Find the financial insights you need to make smarter
                    decisions. Understand what products and services you are
                    paying for to optimize your spend and reduce duplication.
                </p>

                <Button />
            </div>

            <div className={`flex-1 ${styles.flexCenter} relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
                <img src={dash1} alt="Dashboard" />
            </div>
        </div>
        {/* Dashboard 2 */}
        <div className={`flex md:flex-row flex-col gap-10 ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
            <div className={`flex-1 ${styles.flexCenter} relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
                <img src={dash2} alt="Dashboard" />
            </div>
            <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                <h2 className={`${styles.heading2}`}>
                    Forecast accurately to meet budget goals
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                    Link actual contract commitments to your budgeting process. Pipeline and forecast views provide you the ability to see future commitments to ensure you never miss a renewal and maximize the value of each contract.
                </p>

                <Button />
            </div>
        </div>
    </section>
);

export default Business;