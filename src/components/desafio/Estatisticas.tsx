import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";

export default function Estatisticas() {

    const { qtdeDeAulas, aulasConcluidas, duracaoTotal, duracaoConcluida, percentualConclusao } =
        useContext(CursoContext)

    return (
        <div className="
            flex justify-around items-center
            w-4/5 h-24 rounded-lg
            bg-zinc-700
        ">
            <Estatistica valor={qtdeDeAulas} texto={"Qtde Aulas"}/>
            <Estatistica valor={aulasConcluidas} texto={"Aulas Concluidas"}/>
            <Estatistica valor={duracaoTotal} texto={"Duração Total"}/>
            <Estatistica valor={duracaoConcluida} texto={"Duração Concluida"}/>
            <Estatistica valor={`${percentualConclusao}%`} texto={"Perc. Conclusão"}/>

        </div>
    )
}