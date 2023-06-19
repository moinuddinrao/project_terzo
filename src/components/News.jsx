import { TC, PROCURE, CIO, TERZO } from "../assets";
import styles from "../style";

const News = () => (
    <section id="news" className={`${styles.paddingY} mb-10`}>
        <h2 className={`${styles.heading2} text-center my-10`}>
            Latest News About Terzo
        </h2>
        <div className="flex sm:flex-row flex-col">
            {/* Card 1 */}
            <div className="feedback-card card-1 md:mr-10 sm:mr-5 mr-0">
                <span />
                <h3 className={`${styles.heading3}`}>Terzo Announces $16M Series A Round</h3>
                <p className="font-roboto font-normal text-[16px] leading-[24px] my-5">
                    Today is a big day for Terzo. We have raised $16M in Series A funding led by Align Ventures with participation from TYH Ventures, Engage Ventures, Human Capital and other institutional investors.
                </p>
                <hr className="line w-full my-5" />
                <img src={TC} alt="TC" className="h-[25px]" />
            </div>
            {/* Card 2 */}
            <div className="feedback-card card-2 md:mr-10 sm:mr-5 mr-0">
                <span />
                <h3 className={`${styles.heading3}`}>Terzo Announces $16M Series A Round</h3>
                <p className="font-roboto font-normal text-[16px] leading-[24px] my-5">
                    Today is a big day for Terzo. We have raised $16M in Series A funding led by Align Ventures with participation from TYH Ventures, Engage Ventures, Human Capital and other institutional investors.
                </p>
                <hr className="line w-full my-5" />
                <img src={PROCURE} alt="Procure" className="h-[25px]" />
            </div>
            {/* Card 3 */}
            <div className="feedback-card card-3 md:mr-10 sm:mr-5 mr-0">
                <span />
                <h3 className={`${styles.heading3}`}>Terzo Announces $16M Series A Round</h3>
                <p className="font-roboto font-normal text-[16px] leading-[24px] my-5">
                    Today is a big day for Terzo. We have raised $16M in Series A funding led by Align Ventures with participation from TYH Ventures, Engage Ventures, Human Capital and other institutional investors.
                </p>
                <hr className="line w-full my-5" />
                <img src={CIO} alt="CIO" className="h-[25px]" />
            </div>
            {/* Card 4 */}
            <div className="feedback-card card-4 md:mr-10 sm:mr-5 mr-0">
                <span />
                <h3 className={`${styles.heading3}`}>Terzo Announces $16M Series A Round</h3>
                <p className="font-roboto font-normal text-[16px] leading-[24px] my-5">
                    Today is a big day for Terzo. We have raised $16M in Series A funding led by Align Ventures with participation from TYH Ventures, Engage Ventures, Human Capital and other institutional investors.
                </p>
                <hr className="line w-full my-5" />
                <img src={TERZO} alt="TERZO" className="h-[25px]" />
            </div>
        </div>
    </section>

);

export default News;