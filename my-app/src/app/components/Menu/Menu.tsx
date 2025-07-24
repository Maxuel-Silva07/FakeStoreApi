import Link from "next/link"

export default function Menu(){
    return(
        <div className="h-full ">
            <div className="w-40 h-full bg-gray-950 flex flex-col items-center gap-6 pt-5 font-bold">
                <p className="cursor-pointer hover:bg-gray-700/20 px-10 py-1 rounded">Inicio</p>
                <p className="cursor-pointer px-8 py-1 rounded hover:bg-gray-700/20">Produtos</p>
                <Link href="/sobre" className="cursor-pointer px-8 py-1 rounded hover:bg-gray-700/20">Sobre</Link>
                <p className="cursor-pointer px-4 py-1 rounded hover:bg-gray-700/20">Fale conosco</p>
                <p className="cursor-pointer px-10 py-1 rounded hover:bg-gray-700/20">Sair</p>
              
            </div>
           
        
        </div>
    )
}