import React from "react";
import styles from "./FontVariants.module.css";

const FontVariants = ({}) => {
  return (
    <div className={styles.sectionContainer}>
      <table className={styles.typographyTable}>
        <tbody>
          <tr>
            <td className={styles.light}>Open Sans Light</td>
            <td className={styles.light}>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </td>
          </tr>
          <tr>
            <td className={styles.regular}>Open Sans Regular</td>
            <td className={styles.regular}>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </td>
          </tr>
          <tr>
            <td className={styles.semibold}>Open Sans Semibold</td>
            <td className={styles.semibold}>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </td>
          </tr>
          <tr>
            <td className={styles.bold}>Open Sans Bold</td>
            <td className={styles.bold}>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </td>
          </tr>
          <tr>
            <td className={styles.extrabold}>Open Sans Extrabold</td>
            <td className={styles.extrabold}>
              abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              !@#$%^&*()
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FontVariants;
