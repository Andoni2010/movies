import React,{useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=782a91359795ec767575f7c17215fdf5";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=782a91359795ec767575f7c17215fdf5&query";
function App() {
  
  
  const [movies, setMovies]= useState([])
  const [query, setQuery]=useState("");
  useEffect(()=> {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results);
    })
  }, [])

  const searchMovie =async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
        const url='https://api.themoviedb.org/3/search/movie?api_key=782a91359795ec767575f7c17215fdf5&query=${query}';
        const res = await fetch(url);
        const data= await res.json();
        console.log(data)
        setMovies(data.results)
    }
    catch(e){
      console.log(e)
    }
  }
  const changeMandler=(e)=>{
    setQuery(e.target.value)
  }

  return (
    <>
    <Navbar  expand="lg" variant='"dark' style={{boxShadow:'0px 5px 10px #2E4959',background:'#2E4959'}}>
      <Container fluid style={{background:'#2E4959'}}>
        <Navbar.Brand href="/home" style={{background:'#2E4959'}}> Movie</Navbar.Brand>
        <Navbar.Brand href="/home" style={{background:'#2E4959'}}> Favorite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">     </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll" style={{background:'#2E4959'}}>
          <Nav className="me-auto my-2 my-lg-3" style={{maxHeight:"100px"}} navbarScroll>
          </Nav>
          <Form className='d-flex' onSubmit={searchMovie} style={{background:'#2E4959'}}>
            <FormControl type='search' placeholder='Movie Search' className='me-2' aria-label='search' name = "query" value={query} onChange={changeMandler}> 

            </FormControl>
            <Button variant='secondary' type='submit' style={{background:'#2E4959',}}>Search</Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="container-ml">
      <div className="grid">
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
    </div>
    </>
  );
}

export default App;
