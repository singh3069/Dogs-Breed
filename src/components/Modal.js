import "./modal.css";
const Modal = (props) => {
  const { dogData, closeHandler } = props;
  return (
    <div>
      {/* <div>
        <h1>{dogData.name}</h1>
      </div> */}

      <div className="modalContainer">
        <span onClick={closeHandler} className="closeBtn"></span>

        <div className="img-div">
          <img
            className="modalDogImage"
            alt="dogimages"
            src={dogData.image.url}
          />
        </div>

        <div className="name-nd-abut-div">
          <div className="name-div">
            <h1>{dogData.name}</h1>
          </div>

          <div className="abut-div">
            <p>
              <u>Temperament</u>:-&nbsp;
              {dogData.temperament}.
            </p>
            <p>
              <u>Origin</u>:-&nbsp;
              {dogData.origin ? dogData.origin : <i>Not Found</i>}.
            </p>
            <p>
              <u>Bred-For</u>:-&nbsp;
              {dogData.bred_for ? dogData.bred_for : <i>Not Found</i>}.
            </p>
            <p>
            <u>Breed-Group</u>:-&nbsp;
              {dogData.breed_group ? dogData.breed_group : <i>Not Found</i>}.
            </p>
            <p>
              <u>Life-Span</u>:-&nbsp;
              {dogData.life_span ? dogData.life_span : <i>Not Found</i>}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
