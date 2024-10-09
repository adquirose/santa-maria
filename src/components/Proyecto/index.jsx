import styled from "styled-components"
import Logo from "../../assets/logo.png"

export const ProyectoContainer = styled.div`
    max-width:520px;
    min-width:340px;
    width:90%;
    height:100%;
    max-height:520px;
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
    padding:1rem;
    @media(max-width:420px){
        padding:0.75rem;
        max-height:480px;
       
    }
`
const Parrafo = styled.p`
    padding: 0 0.75rem;
    text-align:justify;
`
const H2 = styled.h2`
    font-weight:normal;
`
const Proyecto = () => {
    return(
        <ProyectoContainer>
            {/* <img src={Logo} alt="logo-proyecto" style={{width:'320px', }}/> */}
            <H2>Santa María</H2>
            <Parrafo>	
                El Proyecto Santa María, ubicado en Coronel de Maule, ofrece 28 parcelas de
                aproximadamente media hectárea cada una. Estas parcelas están situadas en un 
                entorno natural privilegiado, cerca de un estero, con hermosas vistas a los 
                bosques circundantes y viñedos cercanos. 
                La combinación de paisajes rurales y la proximidad a áreas naturales hace 
                de este proyecto una excelente oportunidad para quienes buscan tranquilidad 
                y contacto directo con la naturaleza.

                Características del proyecto:
                <ul>
                    <li> Servicios incluidos: Luz, agua potable y alcantarillado en cada parcela.</li>
                    <li> Infraestructura: Caminos internos habilitados para garantizar un fácil acceso.</li>
                    <li> Opciones de pago: Se aceptarán vehículos, criptomonedas y efectivo como parte del pago, lo que ofrece flexibilidad para los compradores.</li>
                </ul>
                
                La cercanía a playas como Cobquecura (50 minutos) y Playa Buchupureo (1 hora), 
                además de la ciudad de Chillán (1 hora 25 minutos), brinda accesibilidad tanto a 
                zonas turísticas como a servicios urbanos importantes. Este proyecto es ideal para vivir, 
                vacacionar o como inversión, rodeado de naturaleza y vistas excepcionales.
            </Parrafo>
        </ProyectoContainer>
    )
}
export default Proyecto