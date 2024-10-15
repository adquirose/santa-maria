import styled from "styled-components"
import Logo from "../../assets/logo.png"

export const ProyectoContainer = styled.div`
    max-width:520px;
    min-width:340px;
    width:90%;
    height:100%;
    max-height:560px;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index:6;
    justify-self:center;
    align-self:center;
    border-radius:7px;
    box-shadow: 4px 9px 50px -10px rgba(0,0,0,0.85);
    background-color:white;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:1rem;
    padding-right:1rem;
    padding-top:0;
    @media(max-width:420px){
        padding:0.75rem;
        max-height:480px;
       
    }
`
const Parrafo = styled.p`
    padding: 0 0.75rem;
    text-align:justify;
    margin:0;
`
const Proyecto = () => {
    return(
        <ProyectoContainer>
            <img src={Logo} alt="logo-proyecto" style={{width:'220px'}}/>
            <Parrafo>	
                El Proyecto Santa María, ubicado en Coronel de Maule, ofrece 28 parcelas de
                aproximadamente media hectárea cada una. Estas parcelas están situadas en un 
                entorno natural privilegiado, cerca de un estero, con hermosas vistas a los 
                bosques circundantes y viñedos cercanos. 
                La combinación de paisajes rurales y la proximidad a áreas naturales hace 
                de este proyecto una excelente oportunidad para quienes buscan tranquilidad 
                y contacto directo con la naturaleza.
                <br/>
                <br/>
                Urbanización:
                <ul>
                    <li>Suministro  de energía eléctrica</li>
                    <li>Tratamiento de aguas servidas</li>
                    <li>Suministro de agua residencial</li>
                    <li>Caminos y portón de entrada</li>
                </ul>
                
                La cercanía a playas como Cobquecura (50 minutos) y Playa Buchupureo (1 hora), 
                además de la ciudad de Chillán (1 hora 25 minutos), brinda accesibilidad tanto a 
                zonas turísticas como a servicios urbanos importantes. Este proyecto es ideal para vivir, 
                vacacionar o como inversión, rodeado de naturaleza y vistas excepcionales.
            </Parrafo>
            <p style={{textAlign:'center', fontSize:'1.2rem', fontWeight:'bold'}}>Crédito directo con un 30% de pie y un plazo máximo de hasta 6 meses. </p>
        </ProyectoContainer>
    )
}
export default Proyecto