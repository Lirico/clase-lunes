



const Boton = (props) => {
  return (
    <>
      <button>Comprar</button>

      <style jsx>{`
        button {
            background-color: ${props.bgColor};
            border: none;
            color: white;
            padding: 10px 20px;
            text-transform: uppercase;
            border-radius: .5rem;
            box-shadow: 0px 3.5px 1px 0.5px black;
            transition: 0.3s;
            margin: .8rem 0;
        }
        button:hover {
            transform: translateY(3.5px);
            box-shadow: 0px 0px 0px 0px black;
        }
      `}</style>
    </>
  );
};

export default Boton;
