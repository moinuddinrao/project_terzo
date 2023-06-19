import Button from "./Button";
import styles from "../style";
import { Microsoft, Oracle, ServiceNow, Coupa, Workday, SAP, plus, logoIcon, curveLine, int1, int2 } from "../assets";

const Integrations = () => (
    <section id="Integrations">
        <div className={`${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 relative`}>
            <div className="absolute z-[0] w-[500%] h-[500%] bg-gradient " />
            <div className="spangroup">
                <div className="spanPrimary" />
                <div className="spanSecondary" />
            </div>
            <h2 className={`text-center mt-10 lg:px-80 sm:px-0 ${styles.heading2}`}>
                Enhance your applications with integrations
            </h2>
            <p className={`${styles.paragraph} mt-5 lg:px-96 sm:px-0 text-center`}>
                Integrate your existing enterprise applications out of the box. Terzo connects to ERP, P2P, SSO, and more.
            </p>

            <div className={`circle-container ${styles.flexCenter} relative w-[100%] mb-24 hidden lg:flex`}>
                <div className="absolute z-[2] top-5 lg:top-20 w-[20%]">
                    <img src={logoIcon} alt="Logo Icon" className="w-[100%]" />
                </div >
                <img src={curveLine} alt="Curve Line" className="w-[85%]" />
                <a href='#' className='deg0'><img alt="deg0" src={SAP} className="w-[100%]" /></a>
                <a href='#' className='deg30'><img alt="deg30" src={Workday} className="w-[100%]" /></a>
                <a href='#' className='deg60'><img alt="deg60" src={Coupa} className="w-[100%]" /></a>
                <a href='#' className='deg90'><img alt="deg90" src={plus} className="w-[100%]" /></a>
                <a href='#' className='deg120'><img alt="deg120" src={ServiceNow} className="w-[100%]" /></a>
                <a href='#' className='deg150'><img alt="deg150" src={Oracle} className="w-[100%]" /></a>
                <a href='#' className='deg180'><img alt="deg180" src={Microsoft} className="w-[100%]" /></a>
            </div>
        </div>
        {/* Dashboard 1 */}
        <div className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className={`flex-1 ${styles.heading2}`}>
                        Speed up intake and approval processes
                    </h2>
                </div>

                <p className={`${styles.paragraph} mt-5 mr-10`}>
                    No-code workflow templates make this fast and easy to deploy. Automate tasks and approvals. Govern cost, risk, and get visibility into all requests.
                </p>

                <Button />
            </div>

            <div className={`flex-3 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />

                <img src={int1} alt="Dashboard" className="w-[100%] h-[100%] z-[5]" />
            </div>
        </div>
        {/* Dashboard 2 */}
        <div className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />

            <div className={`flex-3 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />

                <img src={int2} alt="Dashboard" className="w-[100%] h-[100%] z-[5]" />
            </div>

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className={`flex-1 ${styles.heading2}`}>
                        Maximize your strategic relationships
                    </h2>
                </div>

                <p className={`${styles.paragraph} mt-5 mr-10`}>
                    Robust analytics and reporting provide critical data to strengthen negotiations and optimize relationships with customers, suppliers, and partners.
                </p>

                <Button />
            </div>
        </div>

    </section>
);

export default Integrations;