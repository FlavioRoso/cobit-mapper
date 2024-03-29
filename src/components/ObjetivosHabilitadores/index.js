import React, {useContext, useState, useEffect} from 'react';
import {ListGroup, Card} from 'react-bootstrap';
import {objetivosTi} from '../../data/objetivosTi';
import {objetivosHabilitadores} from '../../data/objetivosHabilitadores';

import {ObjetivosContext} from '../../Context/ObjetivosContext';


function ObjetivosHabilitadores() {
    const [objetivosConfig, setObjetivosConfig] = useContext(ObjetivosContext);
    const [mostrarGrid, setMostrarGrid] = useState(false);
    const [objetivosHabilitadoresSelecionados, setObjetivosHabilitadoreSelecionados] = useState([]);

    useEffect(() => {
        let anyObjetivoSelecionado = false;

        const novosObjetivos = [];
        Object.entries(objetivosHabilitadores).map((objetivo) => {
            novosObjetivos[objetivo[0]] = false;
        })
        objetivosConfig.objetivosTiSelecionados.map((valor, key) => {

            if(valor)
            {
                anyObjetivoSelecionado = valor;
                objetivosTi[key + 1].habilitadores.map((obh) => {
                    novosObjetivos[obh] = true;
                });
            } 
            
        })
        setMostrarGrid(anyObjetivoSelecionado);
        setObjetivosHabilitadoreSelecionados(novosObjetivos);
        
    },[objetivosConfig]);

    const setDataTodosObjetivos = (valor) => {
        const novosObjetivos = [];
        Object.entries(objetivosHabilitadores).map((objetivo) => {
            novosObjetivos[objetivo[0]] = valor;
        })
        setObjetivosHabilitadoreSelecionados(novosObjetivos);
    };

    const iniciarArrayObjetivosSelecionados = () => {
        setDataTodosObjetivos(false);
        setObjetivosHabilitadoreSelecionados([...objetivosHabilitadoresSelecionados]);
    };

   
    useEffect(() => {
        iniciarArrayObjetivosSelecionados();
    }, []);

    useEffect(() => {
    }, [objetivosHabilitadoresSelecionados]);

    if(mostrarGrid) {
        return (
            <Card className='p-3' >
            <h1>Objetivos Habilitadores</h1>
           <ListGroup>
           { Object.entries(objetivosHabilitadores).map((objetivo) => {
               if(objetivosHabilitadoresSelecionados[objetivo[0]])
               return  <ListGroup.Item key={objetivo[0]}>{objetivo[0]} - {objetivo[1]}</ListGroup.Item>
         
            })}
            </ListGroup>
            
        </Card>
        );
    }
    
}

export default ObjetivosHabilitadores;