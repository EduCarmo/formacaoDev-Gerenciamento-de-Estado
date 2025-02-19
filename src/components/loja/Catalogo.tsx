import produtos from "@/data/contants/produtos";
import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";

export default function Catalogo() {

    function renderizarProdutos() {
        return produtos.map(prod => {
            return (
                <ProdutoCard key={prod.id} produto={prod} />
            )
        })
    }

    return (
        <Area titulo="Catalogo" cor="purple">
            <div className="flex justify-around flex-wrap gap-4">
                {renderizarProdutos()}
            </div>
        </Area>
    )
}