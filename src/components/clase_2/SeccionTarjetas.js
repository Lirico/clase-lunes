import ListaTarjetas from "./ListaTarjetas"




const SeccionTarjetas = () => {
  return (
    <>
        <section>
            <header>
                <h2>Destinos de la Argentina</h2>
                <p>Elige uno de los hermosos destinos disponibles en nuestra plataforma. El segundo pasaje con un 50% de descuento.</p>
            </header>
            <ListaTarjetas />
        </section>

        <style jsx>{`
            section {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            header {
                text-align: center;
            }
            h2 {
                font-size: 2rem;
                line-height: 2;
            }
            p {
                font-size: 1.2rem;
                line-height: 1.5;
            }
        `}</style>
    </>
  )
}

export default SeccionTarjetas