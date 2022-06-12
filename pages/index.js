import Head from "next/head";
import styles from "../styles/Home.module.css"
import Footer from "./pageSections/Footer/Footer";
import Header from "./pageSections/Header/Header";
import Hero from "./pageSections/Hero/Hero";
import Projects from "./pageSections/Projects/Projects";
import Quote from "./pageSections/Quote/Quote";
import Skills from "./pageSections/Skills/Skills";


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
