import styles from './styles.module.scss';

export default function Price() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src="/new-logo.svg" alt="Logo do Curso" />
                </div>
                <div className={styles.price}>
                    <h5>
                        Pré-venda: <span>de R$ 197,00</span> por
                    </h5>
                    <h2>12 x de R$ 7,93</h2>
                    <h5>ou R$ 79,00 à vista</h5>
                </div>
                <hr />
                <div className={styles.middle}>
                    <div className={styles.row}>
                        <img src="/checkN.svg" alt="Check" />
                        <h4>Acesso vitalício ao curso</h4>
                    </div>
                    <div className={styles.row}>
                        <img src="/checkN.svg" alt="Check" />
                        <h4>Certificado de conclusão</h4>
                    </div>
                    <div className={styles.row}>
                        <img src="/checkN.svg" alt="Check" />
                        <h4>Projetos práticos para portfólio</h4>
                    </div>
                    <div className={styles.row}>
                        <img src="/checkN.svg" alt="Check" />
                        <h4>Suporte exclusivo para dúvidas</h4>
                    </div>
                    <div className={styles.row}>
                        <img src="/checkN.svg" alt="Check" />
                        <h4>Atualizações gratuitas do conteúdo</h4>
                    </div>
                    <div className={styles.row}>
                        <img src="/checkN.svg" alt="Check" />
                        <h4>Comunidade para networking</h4>
                    </div>
                    <div className={styles.row}>
                        <img src="/checkN.svg" alt="Check" />
                        <h4>Aprenda no seu ritmo</h4>
                    </div>
                </div>
                <button
                    onClick={() =>
                        (window.location.href =
                            'https://pay.kiwify.com.br/dI9thX7')
                    }
                >
                    quero começar agora
                </button>
            </div>
        </div>
    );
}
