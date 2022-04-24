import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ObjetivosTi from '../components/ObjetivosTi';
import {Container} from 'react-bootstrap';
function Home() {
    return <Container className='p-2'>
               <ObjetivosTi />
           </Container> ;
}

export default Home;