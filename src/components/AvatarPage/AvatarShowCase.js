import React from "react";
import styles from "./AvatarShowCase.module.css";

const AvatarShowCase = ({}) => {
  return (
    <div className={styles.sectionAvatars}>
        <div className={styles.avatarsBox}>
            <div className={styles.block}>
                <ul className={styles.items}>
                    <li>
                        <div className={styles.boxSmall}>
                            <span className={styles.avatar}>HF</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.boxMedium}>
                            <span className={styles.avatar}>HF</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.boxBig}>
                            <span className={styles.avatar}>HF</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.boxLarge}>
                            <span className={styles.avatar}>HF</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.boxExtraLarge}>
                            <span className={styles.avatar}>HF</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default AvatarShowCase;
