import Button from "./Button";
import styles from "../style";
import { businessBack, businessFront, dash1, dash2 } from "../assets";

const Business = () => (
    <section id="business">
        <div className={`${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 relative`}>
            <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
            <div className="spangroup">
                <div className="spanPrimary" />
                <div className="spanSecondary" />
            </div>
            <h2 className={`text-center m-10 ${styles.heading1}`}>
                Contract Intelligence to drive financial performance
            </h2>
            <div className={`flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <div className="mt-20">
                    <img src={businessBack} alt="businessBack" className="w-[100%] h-[100%]" />
                </div>
                <div className={`absolute flex ${styles.flexCenter} w-[100%] h-[100%] top-10`}>
                    <img src={businessFront} alt="businessFront" className="absolute items-center z-[1]" />
                </div>
                <div className="absolute z-[2] w-[100%] h-[100%] top-14 bg-black-gradient " />
            </div>

            <p className={`businessPara max-w-[650px] mt-20`}>
                Terzo helps leaders <span>track every dollar</span> coming in and going out of the organization
            </p>
            <div className="rounded-full btn py-3 px-6 mt-10">
                <a href="#more" className="text-black text-[16px] font-roboto font-medium">Learn More</a>
            </div>
        </div>
        {/* Dashboard 1 */}
        <div className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className={`flex-1 ${styles.heading2}`}>
                        Instant access to data to drive smarter financial decisions
                    </h2>
                </div>

                <p className={`${styles.paragraph} mt-5 mr-10`}>
                    Find the financial insights you need to make smarter
                    decisions. Understand what products and services you are
                    paying for to optimize your spend and reduce duplication.
                </p>

                <Button />
            </div>

            <div className={`flex-3 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />

                <img src={dash1} alt="Dashboard" className="w-[100%] h-[100%] z-[5]" />
            </div>
        </div>
        {/* Dashboard 2 */}
        <div className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />

            <div className={`flex-3 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />

                <img src={dash2} alt="Dashboard" className="w-[100%] h-[100%] z-[5]" />
            </div>

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className={`flex-1 ${styles.heading2}`}>
                        Forecast accurately to meet budget goals
                    </h2>
                </div>

                <p className={`${styles.paragraph} mt-5 mr-10`}>
                    Link actual contract commitments to your budgeting process. Pipeline and forecast views provide you the ability to see future commitments to ensure you never miss a renewal and maximize the value of each contract.
                </p>

                <Button />
            </div>
        </div>
    </section>
);

export default Business;