import React, {useContext, useState, useEffect} from 'react';
import {ListGroup, Card} from 'react-bootstrap';
import {objetivosTi} from '../../data/objetivosTi';
import {objetivosCorporativos} from '../../data/objetivosCorporativos';
import {ObjetivosContext} from '../../Context/ObjetivosContext';


function ObjetivosTi() {
    const [objetivosConfig, setObjetivosConfig] = useContext(ObjetivosContext);
    const [mostrarGrid, setMostrarGrid] = useState(false);
    const [objetivosTiSelecionados, setObjetivosTiSelecionados] = useState([]);

    useEffect(() => {
        let anyObjetivoSelecionado = false;
        setDataTodosObjetivos(false);
        objetivosConfig.objetivosCorporativosSelecionados.map((valor, key) => {

            if(valor)
            {
                anyObjetivoSelecionado = valor;
                objetivosCorporativos[key + 1].objetivosTi.map((obti) => {
                    objetivosTiSelecionados[obti - 1] = true;
                });
            }
        })
        setMostrarGrid(anyObjetivoSelecionado);
        objetivosConfig.objetivosTiSelecionados = objetivosTiSelecionados;
        setObjetivosConfig(Object.assign({},objetivosConfig));
        setObjetivosTiSelecionados([...objetivosTiSelecionados]);
        
    },[objetivosConfig.objetivosCorporativosSelecionados]);


    const setDataTodosObjetivos = (valor) => {
        Object.entries(objetivosTi).map((objetivo) => {
            objetivosTiSelecionados[objetivo[0] - 1] = valor;
        })
    };

    const iniciarArrayObjetivosSelecionados = () => {
        setDataTodosObjetivos(false);
        setObjetivosTiSelecionados([...objetivosTiSelecionados]);
    };

   
    useEffect(() => {
        iniciarArrayObjetivosSelecionados();
    }, []);

    if(mostrarGrid) {
        return (
            <Card className='p-3  mb-4 mt-4'>
            <h1>Objetivos de TI</h1>
           <ListGroup>
           {Object.entries(objetivosTi).map((objetivo,key) => {
               if(objetivosTiSelecionados[objetivo[0] - 1])
               return  <ListGroup.Item key={key}>{objetivo[0]} - {objetivo[1].descricao}</ListGroup.Item>
         
            })}
               
            </ListGroup>
            
        </Card>
        );
    }
    else {
        return <></>;
    }
    
    
}

export default ObjetivosTi;