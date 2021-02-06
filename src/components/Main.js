import React, {useState , useEffect} from 'react'
import Modal from "./Modal";
import './style.css'

function Main() {
    const [data,setState] = useState([]);
    const [modalState, setModalState] = useState(false)
    const [sendingData, setSendingData] = useState({})

    const openDogModalHandler = (selectedItem) =>{
        setSendingData(selectedItem)
        setModalState(true)
    }

    const closeDogModalHandler = () =>{
    setModalState(false)
    }

    useEffect(() =>{
        fetch('https://api.thedogapi.com/v1/breeds', {
        headers:{
            'x-api-key':"9232752c-89bc-4363-9439-70c7785c2b9c"
        }
        })
        .then((response) => response.json())
        .then((data) => setState(data.splice(0,20)));
        // .then((data) => console.log(data.splice(0,20)));

    },[]);

    return (
        
        <div>
            <div className="nav-bar"><u><h1>Know About Your Fav Pet(🐕)</h1></u></div>

            <div className="nameImg-div">
            
                {
                data.map((item)=>{

                    return (
                        <div>
                    <div className="content-div" key={item.id} onClick={()=>openDogModalHandler(item)} > 
                    
                    <img className="images" alt={item.name} src={item.image.url}/>
                    <div className="name">
                        <h4>{item.name}</h4>
                    </div>
                    </div>
                            {modalState &&
                            <Modal dogData={sendingData} closeHandler={closeDogModalHandler}/>}

                    </div>
                    
                    )
                })
                }


            
        </div>
        </div>
        
    )
}

export default Main
