import Menu from "./components/Menu/Menu";

type props = {
  id: number
  image: string
  title: string
  price: number
  description: string
  category: string
}


export default async function Home() {

  const response = await fetch('https://fakestoreapi.com/products')

  const dados: props[] = await response.json()

  return (
    <div className="bg-gray-200 w-full h-full flex">
   
   
      <div>
         <Menu/>
      </div>

      <div className="grid grid-cols-3 gap-4 ml-8 mt-8 shadow">
       {dados.map((items,index) => (
            <div key={items.id} className="w-90 h-95 bg-white rounded flex flex-col items-center">
              <img className="h-35 w-35 mt-3 mb-3" src={items.image} alt="" />

              <div className="w-full h-full px-6 grid">
                 <h2 className="font-semibold text-sm text-black">{items.title}</h2>
                 <p className="text-sm text-black">{items.category}</p>
                 <p className="text-green-600">{items.price}</p>

                  <div className="text-xs text-black overflow-y-hidden h-15">{items.description}</div>

                  
                     <button className="w-full bg-blue-700 mb-4 py-1 mt-2">Ver mais</button>
          
                 
              </div>
             
              
          </div>
        ))}
    </div>
    
    
       
    
    </div>
  );
}
