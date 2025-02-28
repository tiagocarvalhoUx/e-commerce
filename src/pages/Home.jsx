import React,{ useState, useEffect } from "react"
import {Link} from "react-router-dom"
import {motion} from "framer-motion";
import products from "../assets/data/products"
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css"
import {Container, Row, Col} from "reactstrap";
import heroImg from "../assets/image-2/farma3.png"
import Services from "../services/Services";
import ProductsList from "../components/Ui/ProductsList";
import counterImg from "../assets/image-2/pharma.png"    
import Clock from "../components/Ui/Clock";  


const Home =()=>{

        const [trendingProducts, seTrendingProducts] = useState([])
        const [bestSalesProducts, setBestSalesProducts] = useState([])
        const [mobileProducts, setMobileProducts] = useState([])
        const [wirellesProducts, setWirellesProducts] = useState([])
        const [popularProducts, setPopularProducts] = useState([])
        
        
        const year = new Date().getFullYear()

        useEffect(()=>{
                const filteredTrendingProducts = products.filter((item) => item.category === "chair");
                
                const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");
                
                const filteredMobileProducts = products.filter((item) => item.category === "mobile");
                
                const filteredWirellesProducts = products.filter((item) => item.category === "wirelles");

                const filteredPopularProducts = products.filter((item) => item.category === "watch");


                seTrendingProducts(filteredTrendingProducts)
                setBestSalesProducts(filteredBestSalesProducts)
                setMobileProducts(filteredMobileProducts)
                setWirellesProducts(filteredWirellesProducts)
                setPopularProducts(filteredPopularProducts)
        },[]);
    
        return (

        <Helmet title={'Distribuidora'}>
        <section className="hero__section">
        <Container>
                <Row>
                        <Col lg="6" md="6">
                        <div className="hero__content">
                        <p className="hero__subtitle">
                        Produto em alta em {year}
                        </p>
                        <h2>Mais de 3.000 itens das indústrias parceiras</h2>
                        <p>Um mix completo de produtos, em parceria com as maiores marcas do Brasil
                         </p>
                        <motion.button whileTap={{scale:1.2}} className="by__btn"><Link to='https://api.whatsapp.com/send/?phone=18981381986&text=Gostaria%20de%20fazer%20um%20pedido'target="_blank">Compre Agora</Link></motion.button>
                        </div>
                        </Col>

                        <Col lg="6" md="6">
                        <div className="hero__img">
                        <img src={heroImg} alt="" />
                        </div>
                        </Col>
                </Row>
        </Container>
        </section>

          <Services />
          <section className="trending__products">
          <Container>
                <Row>
                        <Col lg="12" className="text-center">
                        <h2 className="section__title">Produtos em alta</h2>
                        </Col>
                        
                        <div  className="espaçamento__h2">
                        </div> 
                        <ProductsList data={trendingProducts}/>
                </Row>
          </Container>
          </section> 
          <section className="best__sales">
          <Container>
          <Row>
                        <Col lg="12" className="text-center">
                        <h2 className="section__title">Os Mais Vendidos</h2>
                        </Col>

                        <div  className="espaçamento__h2">
                        </div> 
                        <ProductsList data={bestSalesProducts}/>
                </Row>  
          </Container>
          </section>

          <section className="timer__count">
          <Container>
                <Row>
                   <Col md="6" lg="12" className="count__down-col">     
                   <div className="clock__top-content"> 
                        <h4 className="text-white fs-4 mb-3">Ofertas Com Tempo Limitado</h4>
                        <h3 className="text-white fs-3 mb-3">Faça já o Seu Pedido  </h3>
                   </div>
                   <Clock/>

                   <motion.button whileTap={{scale:1.2}} className="by__clock store__btn">
                        <Link to='https://api.whatsapp.com/send/?phone=18981381986&text=Gostaria%20de%20fazer%20um%20pedido' target="_black">Click Aqui</Link>
                   </motion.button>
                    </Col>
                  
                   <div className="counter__pharma">
                   <Col md="5" lg="4"  className="text-end counter__img">
                   <img src={counterImg} alt=""  />
                   </Col>
                   </div>


                </Row>
          </Container>
          </section>  
          <section className="new__arrivals">
          <Container>
                <Row>
                

                <Col lg="12" className="text-center">
                <h2 className="section__title">Novidades</h2>
                </Col>
                        
                        <div  className="espaçamento__h2">
                        </div> 
                        <ProductsList data={mobileProducts} />  
                        <ProductsList data={wirellesProducts}/> 
          </Row>
          </Container>
          </section>

          <section className="popular__category">
          
          <Container>
                <Row>
                

                <Col lg="12" className="text-center ">
                <h2 className="section__title">Categoria Popular</h2>
                </Col>
                        
                        <div  className="espaçamento__h2">
                        </div> 
                        <ProductsList data={popularProducts} />  
                        
          </Row>
          </Container>

          </section>    
                        
        </Helmet>
)
}

export default Home;



