import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../../assets/portrait.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Presentation (){
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container id="Présentation" >
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={7} style={{marginTop:200}}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span  style={{color:"white",width:600,height:80}} className="tagline">Bienvenue sur mon Portfolio</span>
                <h1 style={{color:"white"}}>{`Bonjour! je m'appelle YERBE Jordan`}</h1>
                <h2  style={{color:"white"}}><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer"]'>{text}</span></h2>
                  <p>Durant mes études, j’ai développé une grande passion pour l’informatique, et je suis fier de dire qu’elle est devenue bien plus que cela. Je suis actuellement à la recherche d’une alternance, pour me permettre de développer mes compétences. J’ai envie de réussir et j’aime apprendre. Je suis impatient de pouvoir m’épanouir dans une nouvelle entreprise.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={ "animate__animated animate__zoomIn"}>
                  <img src={headerImg} style={{width:250,height:350,borderRadius:200,marginTop:200,marginRight:320}} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}