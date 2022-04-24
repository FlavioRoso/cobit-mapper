import React,{ useState, useEffect } from 'react';
import {objetivosTi} from '../../data/objetivosTi';
import {Table, Card} from 'react-bootstrap';
function ObjetivosTi({callbackObjetivosTiSelecionados}) {

    const [objetivosSelecionados,setObjetivosSelecionados] = useState([]);

    
    let iniciarArrayObjetivosSelecionados = () => {
        Object.entries(objetivosTi).map((objetivo) => {
            objetivosSelecionados[objetivo[0]] = false;
        })
        setObjetivosSelecionados([...objetivosSelecionados]);
    };

    let alternarTodosObjetivos = (event) => {
        Object.entries(objetivosTi).map((objetivo) => {
            objetivosSelecionados[objetivo[0]] = event.target.checked;
        })
        setObjetivosSelecionados([...objetivosSelecionados]);

    };

    let alternarObjetivoSelecionado = (key) => {
        objetivosSelecionados[key] = !objetivosSelecionados[key];
        setObjetivosSelecionados([...objetivosSelecionados]);
    };

    useEffect(() => {
        iniciarArrayObjetivosSelecionados();
    }, []);
    // useEffect(() => {
    //     callbackObjetivosTiSelecionados(objetivosSelecionados);
    // }, [objetivosSelecionados]);

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
                    {objetivosSelecionados.slice(1).map((ativo,key) => {
                        key = key + 1;
                        var descricao = objetivosTi[key]["descricao"];
                        return (
                            <tr key={key}>
                                <th><input type="checkbox" checked={(ativo ? "checked" : "")} onChange={() => alternarObjetivoSelecionado(key)} id={"objetivo" + key} /></th>

                                <td>{key}</td>
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