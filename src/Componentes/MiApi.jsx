import React, { useEffect, useState } from "react"

 const MiApi = ()=> {

    const [ data, setData ] = useState()
    const [ palabra, setPalabra] = useState('')
    const [ filtrado, setFiltrado] = useState()

    const obtenerData = () => {
        const URL = 'https://api.victorsanmartin.com/feriados/en.json';
        fetch(URL)
        .then((respuesta) => respuesta.json())
        .then((respuesta) => {
          setData(respuesta) 
        })
    }

    useEffect(() => {
        obtenerData()
    },[])
    
    const filtrar = () => { 
        const result = data?.data.filter((response) => response.title == palabra.trimStart());
        if(result) setFiltrado(result)
    }    

    const value = filtrado && palabra != '' ? filtrado : data?.data;
    
    function SortArray(x, y){
        if (x.title < y.title) {return -1;}
        if (x.title > y.title) {return 1;}
        return 0;
    }

    let OrdenPorFecha = value?.sort(SortArray);

    return (
        <>
            <div className="d-flex gap-2 mt-5">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar por celebración" onChange={(e) => setPalabra(e.target.value)}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => filtrar()} >Buscar</button>
            </div>

            <div className="d-flex mt-5">
                <h3>Fecha</h3>
                <h3>Celebracion</h3>
                <h3>Tipo de ferido</h3>
            </div>
            {
                OrdenPorFecha?.map((respuesta) => (
                    <div className="card w-100" >
                        <div className="card-body">
                            <span> Fecha: { respuesta.date}</span>
                            <span className="card-title"> { respuesta.title} </span>
                            <span className="card-title"> Tipo de fereiado { respuesta.extra} </span> 
                        </div>
                    </div>
                ))
            }
        </>
        
    )

}

export default MiApi