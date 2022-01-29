import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Formulario from '../components/Formulario'

const EditarCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado);
            } catch (error) {
                console.log(error);
            }
            setCargando(!cargando)
        }
        obtenerClienteAPI()
    }, [])

    return (
        <>
            <h1 className='font-black text-blue-900 text-2xl'>Editar Cliente</h1>
            <p>Utiliza este gormulario para editar datos de un Cliente</p>
            
            {cliente?.nombre ? (
                <Formulario 
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : <p>Cliente ID no Válido</p>}
        </>
    )
}

export default EditarCliente
