import './modal.css'
const Modal = (props) =>{
  const {dogData, closeHandler} = props
  return(
    <div>

      {/* <div>
        <h1>{dogData.name}</h1>
      </div> */}

    <div className="modalContainer">
      <span onClick={closeHandler} className="closeBtn"></span>
      

      <div className="img-div">
      <img className="modalDogImage" src={dogData.image.url}/>
      </div>
      
      <div className="name-nd-abut-div">
      <div className="name-div">
        <h1>{dogData.name}</h1>
      </div> 

      <div className="abut-div">

      <p><b>Temperament:-</b>{dogData.temperament}.</p>
      <p><b>Origin:-</b>{dogData.origin ? dogData.origin : <i>Not Found😕</i>}.</p>
      <p><b>Bred-For:-</b>{dogData.bred_for ? dogData.bred_for : <i>Not Found😕</i>}.</p>
      <p><b>Breed-Group:-</b>{dogData.breed_group ? dogData.breed_group : <i>Not Found😕</i>}.</p>
      <p><b>Life-Span:-</b>{dogData.life_span ? dogData.life_span : <i>Not Found😕</i>}.</p>

      </div>

      </div>
      

    </div>

    </div>
  )
}


export default Modal

