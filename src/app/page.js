import Hero from "@/components/Hero";
import styles from "./page.module.css";
import About from "@/components/about/About";
import Galllery from "@/components/gallery";


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Galllery/>
      
    </main>
  );
}
