import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import '../styles/estilo.css';
import '../styles/laboratorios.css';
import IMG from "../assets/cursoprog.png";
import AOS from "aos";

const verification = (item, remoto ) =>{
  if (item.node.Tipo === remoto){
    return (
      <div>
        <h3 className="nome-exp">{item.node.Nome}</h3>
        <img src={IMG} class="card-img-top img-experimento" alt="L1R2"/>
        <div className="card-body">
          <p className="card-text">{item.node.Descricao}</p>
          <div className="div-btn">
            <button className="btn-laboratorio" href="../inDevelopment">
              Ir para Laboratório 
            </button>
          </div>
        </div> 
      </div>
    )
  }
  return (<div></div>)
}

const Experimentos = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const data = useStaticQuery(query);
  console.log('hiii', data)
  return(

    <div className="card mb-3" data-aos="fade-up">
      <div>
        <section className="secao" id="section2">
          <div className="container container-exps">
            <h2 className="tipo-exp">Remoto</h2>

              {data.allStrapiLaboratorio.edges.map(
                (item) =>
                <div>
                  {verification(item, true)}
                </div>
              )}
          </div>
          <div className="container container-exps">
            <h2 className="tipo-exp">Virtual</h2>

            {data.allStrapiLaboratorio.edges.map(
              (item) =>
              <div>
                {verification(item, false)}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

const query = graphql`
query {
    allStrapiLaboratorio {
        edges {
          node {
            Nome
            Descricao {
              data {
                Descricao
              }
            }
            Tipo
          }
        }
      }
}
`

export default Experimentos;
