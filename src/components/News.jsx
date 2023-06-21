import { newsCards } from "../constants";
import styles from "../style";

const News = () => (
    <section id="news" className={`${styles.paddingY} mb-10`}>
        <h2 className={`${styles.heading2} text-center my-10`}>
            Latest News About Terzo
        </h2>
        <div className={`${styles.flexStart} sm:flex-row flex-col flex-wrap gap-10`}>
            {newsCards.map((news) => (
                <div key={news.id} className={`w-full flex-1 flex flex-col justify-start items-start feedback-card ${news.id}`} >
                    <span />
                    <h3 className={`${styles.heading3}`}>{news.title}</h3>
                    <p className="font-roboto font-normal text-[16px] leading-[24px] my-5">{news.description}</p>
                    <hr className="line w-full my-5" />
                    <img src={news.icon} alt={`${news.id}`} className="h-[25px]" />
                </div>
            ))}
        </div>
    </section>

);

export default News;