import styles from "./page.module.css";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ width: "100dvw", height: "100dvh" }}>
        <Spline scene="https://prod.spline.design/Ew5Rlgu1wcCokcPs/scene.splinecode" />
      </div>
    </main>
  );
}
