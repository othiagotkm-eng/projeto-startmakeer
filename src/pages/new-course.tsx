import Banner from '@/components/New-Course/Banner';
import Cards from '@/components/New-Course/Cards';
import Depoimentos from '@/components/New-Course/Depoimentos';
import FAQ from '@/components/New-Course/FAQ';
import Footer from '@/components/New-Course/Footer';
import Header from '@/components/New-Course/Header';
import Price from '@/components/New-Course/Price';
import Section2 from '@/components/New-Course/Section2';
import Steps from '@/components/New-Course/Steps';
import BannerTimer from '@/components/New-Course/Timer';
import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/newCourse.module.scss';

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.ttq) {
            window.ttq.track('ViewContent');
        }
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Rei Do Código</title>
            </Head>
            <Header />
            <div id="inscricao">
                <BannerTimer targetDate="2025-01-18T23:59:59" />
            </div>
            <div id="desafio">
                <Banner />
            </div>
            <div id="como-funciona">
                <Section2 />
            </div>
            <div id="premiacao">
                <Cards />
            </div>
            <div id="depoimentos">
                <Depoimentos />
            </div>
            <div id="steps">
                <Steps />
            </div>
            <div id="price">
                <Price />
            </div>
            <div id="duvidas">
                <FAQ />
            </div>
            <Footer />
        </div>
    );
}
