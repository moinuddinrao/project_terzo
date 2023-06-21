import Button from "./Button";
import styles from "../style";
import { Microsoft, Oracle, ServiceNow, Coupa, Workday, SAP, plus, logoIcon, curveLine, int1, int2 } from "../assets";

const Integrations = () => (
    <section id="Integrations">
        <div className={`${styles.flexCenter} flex-col relative`}>
            <div className="spangroup">
                <div className="spanPrimary" />
                <div className="spanSecondary" />
            </div>
            <h2 className={`text-center mt-10 lg:px-96 md:px-48 px-0 ${styles.heading2}`}>
                Enhance your applications with integrations
            </h2>
            <p className={`${styles.paragraph} mt-5 lg:px-96 md:px-48 px-0 text-center`}>
                Integrate your existing enterprise applications out of the box. Terzo connects to ERP, P2P, SSO, and more.
            </p>

            <div className={`${styles.flexCenter} relative w-[100%] my-10`}>
                <div className="absolute z-[0] w-[100%] h-[100%] bg-gradient " />
                <div className="absolute z-[2] md:top-20 sm:top-10 top-5 w-[15%]">
                    <img src={logoIcon} alt="Logo Icon" className="w-[100%]" />
                </div >
                <img className="curveline" src={curveLine} alt="Curve Line"/>
                <img className='box deg0' alt="SAP" src={SAP}/>
                <img className='box deg30' alt="Workday" src={Workday} />
                <img className='box deg60' alt="Coupa" src={Coupa} />
                <img className='plus deg90' alt="plus" src={plus} />
                <img className='box deg120' alt="ServiceNow" src={ServiceNow} />
                <img className='box deg150' alt="Oracle" src={Oracle} />
                <img className='box deg180' alt="Microsoft" src={Microsoft} />
            </div>
        </div>
 
        {/* Dashboard 1 */}
        <div className={`flex md:flex-row flex-col gap-10 ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
            <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                <h2 className={`${styles.heading2}`}>
                Speed up intake and approval processes
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                No-code workflow templates make this fast and easy to deploy. Automate tasks and approvals. Govern cost, risk, and get visibility into all requests.
                </p>

                <Button />
            </div>

            <div className={`flex-1 ${styles.flexCenter} relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
                <img src={int1} alt="Integration 1" />
            </div>
        </div>
        {/* Dashboard 2 */}
        <div className={`flex md:flex-row flex-col gap-10 ${styles.paddingY} relative`}>
            <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
            <div className={`flex-1 ${styles.flexCenter} relative`}>
                <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
                <img src={int2} alt="Integration 2" />
            </div>
            <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                <h2 className={`${styles.heading2}`}>
                Maximize your strategic relationships
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                Robust analytics and reporting provide critical data to strengthen negotiations and optimize relationships with customers, suppliers, and partners.
                </p>

                <Button />
            </div>
        </div>

    </section>
);

export default Integrations;