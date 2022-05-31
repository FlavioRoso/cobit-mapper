import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ObjetivosCorporativos from '../components/ObjetivosCorporativos';
import ObjetivosTi from '../components/ObjetivosTi';
import ObjetivosHabilitadores from '../components/ObjetivosHabilitadores';
import {ObjetivosProvider} from '../Context/ObjetivosContext';
import {Container} from 'react-bootstrap';
function Home() {
    return <Container className='p-2'>
            <ObjetivosProvider>
                
                <ObjetivosCorporativos />
                <ObjetivosTi />
                <ObjetivosHabilitadores />
            </ObjetivosProvider>

           </Container> ;
}

export default Home;