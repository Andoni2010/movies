import {Modal, show} from 'react-bootstrap';
import React, { useState } from "react";
import{ Button } from 'react-bootstrap'
const API_IMG="https://image.tmdb.org/t/p/w500/"


const MovieBox =({titel, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster_path}></img>
                <div className="card-cont">
                <button type="button" className="btn" style={{background: '#BF54B8',
                color:'#2E4959', fontSize:'15px', }} onClick={handleShow}>View</button>
                <Modal show={show} onHide={handleClose} style={{ backgroundColor: '#2E4959',width:'80%',height:'600px', padding: '20px', margin: '10px  9%', boxShadow: '0px 10px 20px 10px #1c2d37'}}>
                    <Modal.Header>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img className="card-img-top" style={{width:'100px',}} src={API_IMG+poster_path}></img>
                    <h3>{titel}</h3>
                    <h4>Imdb: {vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <br></br>
                    <h6>{overview}</h6>
                    </Modal.Body>

                </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;