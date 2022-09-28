import styles from "../style";
import { GetJob } from "../apis/GetJob"
import { Footer, Navbar, Testimonials } from "../components";
import { JobBoard } from "../components/Jobboard";


export const QAEngineer = () => {
  const jobItems = GetJob("qaEngineer");

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
  
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials page={"QA Engineer"} />
          <JobBoard data={jobItems} />
          <Footer />
        </div>
      </div>
      
    </div>

  )
};

