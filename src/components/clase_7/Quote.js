






const Quote = ({quote}) => {

  const {text, author} = quote

  return (
    <>
        <blockquote>
            <i>"{text}"</i>
            <br />
            <cite><b>- {author}</b></cite>
        </blockquote>
    </>
  )
}

export default Quote