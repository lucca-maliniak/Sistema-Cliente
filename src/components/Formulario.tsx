import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface formularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void 
    cancelado?: () => void
}

export default function Formulario(props: formularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '') // operador ?? caso não esteja settado
    const [idade, setidade] = useState(props.cliente?.idade ?? 0) // operador ? retira a obrigação de existir um cliente
    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura className="mb-5"/>
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5"/>
            <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setidade} />
            <div className="flex justify-end mt-7">
                <Botao cor='blue' className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}