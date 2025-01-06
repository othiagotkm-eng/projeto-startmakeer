import styles from './styles.module.scss';

export default function Cards() {
    return (
        <div className={styles.content}>
            <div className={styles.top}>
                <p>O CURSO</p>
                <h2>o que você vai aprender?</h2>
                <h5>
                    Aprenda de forma prática e simples a criar sites modernos do
                    zero.
                    <br /> Não importa o seu nível de conhecimento, você pode
                    começar agora!
                </h5>
            </div>
            <div className={styles.middle}>
                <div className={styles.middleTop}>
                    <div className={styles.card1}>
                        <h3>
                            <img src="/licon1.svg" alt="" />
                            HTML
                        </h3>
                        <p>
                            Ao aprender HTML, você adquire o alicerce
                            fundamental para construir sites profissionais,
                            compreende a estruturação correta de páginas na web,
                            facilita a manutenção de projetos e amplia suas
                            possibilidades de personalização e evolução no
                            desenvolvimento frontend.
                        </p>
                    </div>
                    <div className={styles.card2}>
                        <h3>
                            <img src="/licon2.svg" alt="" /> CSS
                        </h3>
                        <p>
                            Aprenda a estilizar seus sites com designs incríveis
                            e responsivos. Dominar CSS permite não apenas
                            escolher cores e fontes com perfeição, mas também
                            criar layouts criativos, implementar animações
                            sofisticadas e ajustar cada detalhe visual ao seu
                            gosto. Dessa forma, você garante que suas páginas
                            sejam elegantes, acessíveis e capazes de se adaptar
                            a diferentes tamanhos de tela, proporcionando a
                            melhor experiência possível para seus visitantes.
                        </p>
                    </div>
                </div>
                <div className={styles.middleBottom}>
                    <div className={styles.card}>
                        <h3>
                            <img src="/licon3.svg" alt="" /> JAVASCRIPT
                        </h3>
                        <p>
                            Adicione interatividade e dinamismo às suas páginas
                            da web. Ao aprender JavaScript, você ganha a
                            habilidade de criar animações envolventes, manipular
                            o comportamento dos elementos em tempo real e
                            responder às ações do usuário de maneira imediata.
                            Além disso, o domínio dessa linguagem permite
                            integrar APIs externas, aprimorar a experiência do
                            usuário com validações avançadas, lidar com dados de
                            forma personalizada e até mesmo desenvolver
                            aplicativos web completos, expandindo
                            consideravelmente suas possibilidades de criação.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>
                            <img src="/licon4.svg" alt="" /> PROJETOS PRÁTICOS
                        </h3>
                        <p>
                            Crie projetos reais para aplicar seus conhecimentos
                            e montar seu portfólio. Ao desenvolver aplicações
                            concretas, você aprimora suas habilidades em
                            resolução de problemas, domina diferentes
                            ferramentas e aprende a lidar com desafios reais do
                            mercado. Além disso, cada projeto que você cria
                            torna seu portfólio mais sólido, evidenciando seu
                            crescimento como profissional e fortalecendo sua
                            credibilidade diante de possíveis clientes ou
                            empregadores.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>
                            <img src="/licon5.svg" alt="" /> SUPORTE EXCLUSIVO
                        </h3>
                        <p>
                            Conte com ajuda especializada para tirar todas as
                            suas dúvidas. Ao ter acesso a um suporte exclusivo,
                            você pode questionar livremente, receber orientações
                            personalizadas e solucionar problemas complexos com
                            mais agilidade. Além disso, contará com
                            profissionais experientes, prontos para compartilhar
                            dicas e referências úteis, bem como acompanhar seu
                            progresso de perto e garantir que você atinja suas
                            metas de maneira consistente e segura.
                        </p>
                    </div>
                </div>
            </div>
            <button
                onClick={() =>
                    (window.location.href = 'https://pay.kiwify.com.br/dI9thX7')
                }
            >
                quero aprender agora
            </button>
        </div>
    );
}
