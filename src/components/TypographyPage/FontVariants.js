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
          <tr>
            <td className={styles.extrabold}>
              <h1>H1 (36px)</h1>
            </td>
            <td className={styles.extrabold}>
              <h1>Extrabold Heading</h1>
            </td>
          </tr>
          <tr>
            <td className={styles.bold}>
              <h2>H2 (32px)</h2>
            </td>
            <td className={styles.bold}>
              <h2>Bold Heading</h2>
            </td>
          </tr>
          <tr>
            <td className={styles.semibold}>
              <h3>H3 (28px)</h3>
            </td>
            <td className={styles.semibold}>
              <h3>Semibold Heading</h3>
            </td>
          </tr>
          <tr>
            <td className={styles.regular}>
              <h4>H4 (24px)</h4>
            </td>
            <td className={styles.regular}>
              <h4>Regular Heading</h4>
            </td>
          </tr>
          <tr>
            <td className={styles.light}>
              <h5>H5 (22px)</h5>
            </td>
            <td className={styles.light}>
              <h5>Light Heading</h5>
            </td>
          </tr>
          <tr>
            <td className={styles.light}>
              <h6>H6 (20px)</h6>
            </td>
            <td className={styles.light}>
              <h6>Light Heading</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FontVariants;
