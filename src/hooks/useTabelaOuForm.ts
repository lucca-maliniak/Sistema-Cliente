import { useState } from "react";

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') 
    // operador <> no useState seta o tipo,opções do estado do elemento


    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario, 
    }
}