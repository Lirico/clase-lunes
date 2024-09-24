import Boton from "./Boton";

const Tarjeta = (props) => {
  return (
    <>
      <div className="tarjeta">
        <img
          src={props.destino.image}
          alt=""
        />
        <div className="description-container">
            <h3>{props.destino.title}</h3>
            <p>{props.destino.description}</p>
            <Boton bgColor={props.destino.bgColor}/>
        </div>
      </div>

      <style jsx>{`
        .tarjeta {
            margin: 50px;
            width: 200px;
            border-radius: .5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0px 1px 2px 2px lightgray;
        }
        img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-top-right-radius: .5rem;
            border-top-left-radius: .5rem;
        }
        .description-container {
            padding: 0 10px;
            text-align: center;
        }
        h3 {
            font-size: 1.2rem;
            line-height: 2;
        }
        p {
            font-size: .8rem;
            line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export default Tarjeta;
