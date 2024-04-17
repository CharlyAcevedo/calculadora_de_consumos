import { formatCurrency } from "../helpers"
import { TOrderItem } from "../types"

type OrderItemProps = {
    item: TOrderItem,
    removeItems: (id: TOrderItem['id']) => void
}

export default function OrderItem({item, removeItems}: OrderItemProps){

    return(
        <div className="flex justify-between items-center border-t border-gray-200 py-3 last-of-type:border-b">
            <div>
                <p className=" text-lg">{item.name} - {formatCurrency(item.price)}</p>
                <p className=" font-black">cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
            </div>
            <button 
                className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => removeItems(item.id)}
            >X</button>
        </div>
    )
}