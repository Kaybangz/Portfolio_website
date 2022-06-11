import Head from "next/head";
import styles from "../styles/Home.module.css"
import Header from "./pageSections/Header/Header";
import Hero from "./pageSections/Hero/Hero";
import Skills from "./pageSections/Skills/Skills";
import Projects from "./pageSections/Projects/Projects";
import Quote from "./pageSections/Quote/Quote";
import Footer from "./pageSections/Footer/Footer";

const index = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>devCaleb</title>
      </Head>
        <Header/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Quote/>
        <Footer/>
    </main>
  );
};

export default index;
