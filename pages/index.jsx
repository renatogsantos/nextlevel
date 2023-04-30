import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import ButtonSecondary from "@/components/Buttons/ButtonSecondary";
import { beneficios } from "@/config/beneficios";
import { CheckFat, MouseSimple } from "@phosphor-icons/react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <Container fluid>
        <header>
          <Container className="py-3 py-lg-5">
            <Row className="d-flex align-items-center justify-content-center">
              <Col sm="12" lg="7" xl="6" className="">
                <h2>Procurando por algo</h2>
                <div className="d-flex align-items-start">
                  <img
                    className="slide-top d-none d-lg-flex"
                    src="/x-group.svg"
                    width="10%"
                    alt=""
                  />
                  <div className="ps-lg-2">
                    <h1 value="Site criativo">
                      <TypeAnimation
                        sequence={[
                          "Criativo",
                          1000,
                          "Inovador",
                          1000,
                          "Original",
                          1000,
                          "Impressionante",
                          1000,
                          "Inusitado",
                          1000,
                          "Personalizado",
                          1000,
                          "Incrível",
                          1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                      />
                    </h1>
                    <h3>Que tal criarmos algo incrível para sua marca?</h3>
                    <p>
                      Transforme sua presença online com nossos serviços de{" "}
                      <b>
                        web design, desenvolvimento web, UX/UI, SEO, marketing e
                        consultoria estratégica.
                      </b>
                    </p>
                    <p>
                      Nossa equipe experiente pode ajudá-lo a melhorar a
                      performance do seu site e engajar seus usuários. Descubra
                      agora como podemos ajudar sua marca a se destacar na web!
                    </p>
                    <Row className="g-2">
                      <Col sm="12" lg="6">
                        <ButtonPrimary
                          type="button"
                          title="Saiba mais"
                          variant="btn-lg"
                        />
                      </Col>
                      <Col sm="12" lg="6">
                        <ButtonSecondary
                          link="#"
                          title="Contato"
                          variant="btn-lg"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col sm="12" lg="5" xl="6" className="order-first order-lg-last">
                <div className="d-flex align-items-center justify-content-center position-relative p-3">
                  <img
                    className="pentagons slide-top"
                    draggable="false"
                    src="/pentagons.svg"
                    width="100%"
                    alt="Home sorrindo enquanto está sentado"
                  />
                  <img
                    className=""
                    draggable="false"
                    src="/man-home.png"
                    width="100%"
                    alt="Home sorrindo enquanto está sentado"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        <div className="w-100 d-none d-lg-flex align-items-center justify-content-center py-5">
          <MouseSimple
            className="slide-top"
            size={32}
            color="#6401FF"
            weight="duotone"
          />
        </div>

        <section>
          <Container className="main-card">
            <Row className="d-flex align-items-center g-4">
              <Col sm="12" lg="4">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img src="/check.svg" alt="simbolo de confirmação" />
                  <strong className="f-32-i mt-5">
                    Destaque sua marca online com os serviços de{" "}
                    <span className="color-2">alta qualidade</span>
                    da NextLevel.
                  </strong>
                </div>
              </Col>
              <Col sm="12" lg="8">
                <p>
                  Bem-vindo a <b>NextLevel</b>, o seu destino para serviços de
                  desenvolvimento de web sites focados em apresentação de
                  marcas, webdesign UX UI e consultoria. Com nossos serviços de
                  alta qualidade, você pode ter certeza de que está fazendo um
                  investimento inteligente na sua marca.
                </p>
                <p>
                  Ao escolher nossos serviços, você pode obter uma presença
                  digital profissional e impactante que irá destacar sua marca
                  online.
                </p>
                <p>
                  Com nossas soluções de UX e UI, você terá um site que aumenta
                  o engajamento do usuário, tornando a navegação em seu site
                  mais fácil e intuitiva.
                </p>
                <p>
                  Nossa equipe trabalha com as melhores práticas de
                  desenvolvimento web, garantindo que seu site seja rápido,
                  seguro e responsivo em todas as plataformas. Além disso, nossa
                  equipe de consultoria pode ajudar você a definir sua
                  estratégia digital e a maximizar o ROI do seu site.
                </p>
                <p>
                  Com nossos serviços personalizados, você pode obter um site
                  que atende às suas necessidades e objetivos únicos. E com
                  nosso suporte técnico contínuo e confiável, você pode ter
                  certeza de que seu site está sempre funcionando da melhor
                  forma possível.
                </p>
                <p className="m-0">
                  Então, não perca mais tempo e deixe a <b>NextLevel</b> ajudar
                  você a alcançar seus objetivos digitais e se tornar uma
                  presença online forte e confiável.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="py-5">
            <h3 className="f-32 text-center">
              Ao escolher nossos serviços de desenvolvimento de web sites, você
              pode ter certeza de que estará fazendo um investimento inteligente
              na sua marca.
            </h3>
            <Row className="d-flex align-items-center py-5">
              <Col sm="12" lg="4">
                <img
                  draggable={false}
                  src="/man-on-pc.png"
                  width="100%"
                  alt="Homem sentado usando um computador portátil"
                />
              </Col>
              <Col sm="12" lg="8" className="py-4">
                <strong className="f-24 fw-bold">
                  Aqui estão alguns dos benefícios que você pode obter ao
                  trabalhar conosco:
                </strong>
                {beneficios.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="d-flex align-items-center gap-4 my-3"
                    >
                      <CheckFat size={64} color="#9317ff" weight="duotone" />
                      <p className="f-16 m-0">
                        <b>{item.title}:</b> {item.beneficio}
                      </p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
}
