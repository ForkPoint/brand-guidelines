import React from "react";
import styles from "./ButtonsShowCase.module.css";

const ButtonsShowCase = ({}) => {
  return (
    <div className={styles.sectionButtons}>
      <div className={styles.buttonsContent}>
        <div className={styles.actions}>
          <span>Color</span>
          <select>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
          </select>

          <span>Size</span>
          <select>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
          </select>
        </div>
        <div className={styles.textContent}>
          <p>
            Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your
            app.
          </p>
        </div>
        <div className={styles.buttons}>
          <ul className={styles.items}>
            <li>
              <button>Primary</button>
            </li>
            <li>
              <button>Secondary</button>
            </li>
            <li>
              <button>Disabled</button>
            </li>
            <li>
              <button>Default</button>
            </li>
            <li>
              <button>Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ButtonsShowCase;
