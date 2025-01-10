// component css styles
import styles from "./ArtcomExperienceSmall.module.css";

export default function ArtcomExperienceSmall() {
  return (
    <article className={styles["artcom-experience-small"]}>
      <h2>
        ARTCOM 1994-2025
        <br />
        <small className="text-text-2">skorzystaj z naszego doświadczenia</small>
      </h2>
    </article>
  );
}
