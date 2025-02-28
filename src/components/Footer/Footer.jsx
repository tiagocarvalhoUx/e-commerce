import React from "react";
import "./footer.css";
import {motion} from "framer-motion";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const  year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white mb-3">Glória Distribuidora</h1>
              </div>
            </div>
            <p className="footer__text ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              tempora maiores dolore ducimus ipsa officiis dignissimos quod
              temporibus saepe mollitia.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Categorias Top</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 ">
                  <Link
                    to="https://api.whatsapp.com/send/?phone=18981142927&text=Gostaria%20de%20fazer%20um%20pedido"
                    target="_blank"
                  >
                    Produtos em alta
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 ">
                  <Link
                    to="https://api.whatsapp.com/send/?phone=18981381986&text=Gostaria%20de%20fazer%20um%20pedido"
                    target="_blank"
                  >
                    Os Mais Vendidos
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 ">
                  <Link
                    to="https://api.whatsapp.com/send/?phone=18981381986&text=Gostaria%20de%20fazer%20um%20pedido"
                    target="_blank"
                  >
                    Novidades
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 ">
                  <Link
                    to="https://api.whatsapp.com/send/?phone=18981381986&text=Gostaria%20de%20fazer%20um%20pedido"
                    target="_blank"
                  >
                    Categoria Popular
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="2" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Usar Links Completos</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 ">
                  <Link
                    to="/shop"
                    
                  >
                    Compras
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 ">
                  <Link
                    to="/cart">
                    Carrinho
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#">Política de Privacidade</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
          
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contato</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-tems-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Avenida Arthur Ferreira da Costa, 468 Araçatuba-Sp</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-tems-center gap-2 ">
                <span><i class="ri-whatsapp-line"></i></span>
                  <p>+55 18 98138-1986 </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0  d-flex align-tems-center  gap-2 ">
                <span><i class="ri-mail-open-line"></i></span>
                
                <p>contato@gloriadistribui<br/>dora.com.br</p>
                
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
               
               

          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} desenvolvido por Elite Web Designer. Todos os direitos reservados.</p>

            {/* Button Elite */}


            <div className="">
                        
                        <motion.button whileTap={{scale:1.2}} className="elite__button"><Link to='https://api.whatsapp.com/send/?phone=18981381986&text=Gostaria%20de%20fazer%20um%20pedido'target="_blank">Clique aqui</Link></motion.button>
                        </div>     

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;