import React,{ useState, useEffect, useContext } from 'react';
import {objetivosCorporativos} from '../../data/objetivosCorporativos';
import {ObjetivosContext} from '../../Context/ObjetivosContext';
import {Table, Card} from 'react-bootstrap';


function ObjetivosTi() {

    const [objetivosConfig, setObjetivosConfig] = useContext(ObjetivosContext);

    const [objetivosSelecionados,setObjetivosSelecionados] = useState([]);

    const setDataTodosObjetivos = (valor) => {
        Object.entries(objetivosCorporativos).map((objetivo) => {
            objetivosSelecionados[objetivo[0] -1] = valor;
        })
    };
    
    const iniciarArrayObjetivosSelecionados = () => {
        setDataTodosObjetivos(false);
        setObjetivosSelecionados([...objetivosSelecionados]);
    };

    const alternarTodosObjetivos = (event) => {
        setDataTodosObjetivos(event.target.checked);
        setObjetivosSelecionados([...objetivosSelecionados]);

    };

    const alternarObjetivoSelecionado = (key) => {
        objetivosSelecionados[key] = !objetivosSelecionados[key];
        setObjetivosSelecionados([...objetivosSelecionados]);
    };

    useEffect(() => {
        iniciarArrayObjetivosSelecionados();
    }, []);
    useEffect(() => {
        objetivosConfig.objetivosCorporativosSelecionados = objetivosSelecionados;
        setObjetivosConfig(Object.assign({},objetivosConfig));
    }, [objetivosSelecionados]);

    return (
        <Card className='p-3'>
            <h1>Objetivos corporativos</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th><input type="checkbox" onChange={(e) => alternarTodosObjetivos(e)} /></th>
                    <th>#</th>
                    <th>Descrição</th>

                    </tr>
                </thead>
                <tbody>
                    {objetivosSelecionados.map((ativo,key) => {
                        var descricao = objetivosCorporativos[key + 1]["descricao"];


                        return (
                            <tr key={key}>
                                <th><input type="checkbox" checked={(ativo ? "checked" : "")} onChange={() => alternarObjetivoSelecionado(key)} id={"objetivo" + (key)} /></th>

                                <td>{key + 1}</td>
                                <td>{descricao}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Card>
    );
}

export default ObjetivosTi;