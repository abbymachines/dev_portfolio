import Cards from "./Cards";


function Body(props) {
  return (
    <div className='background'>
      <Cards cardsData={props.data} />
      {/* <p></p><p></p><p></p> */}
    </div>
  )
}

export default Body;