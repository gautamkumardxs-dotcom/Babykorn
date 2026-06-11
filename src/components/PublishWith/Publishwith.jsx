import React from "react";
import styles from "./PublishWith.module.css";

const Publishwith = () => {
    return (
        <>
            <section className={styles.publishwith}>
                <div className={styles.header}>
                    <h1>Publish with us</h1>
                    <h3>Have a bold idea? Let’s build it properly</h3>
                    <p>
                        We collaborate with independent developers to <br /> refine their ideas,
                        clarify their creative direction,<br /> and launch meaningful games with
                        confidence <br /> and purpose.
                    </p>
                    <button>Submit Your Game<i class="ri-arrow-right-double-line"></i></button>
                </div>
            </section>
        </>
    );
};

export default Publishwith;
