import type { TOrderItem } from "../types";
import OrderItem from "./OrderItem";
import OrderTotals from "./OrderTotals";
import TipForm from "./TipForm";

type OrderContainerProps = {
    order: TOrderItem[],
    removeItems: (id: TOrderItem['id']) => void,
    tip: number,
    setTip: React.Dispatch<React.SetStateAction<number>>
    resetOrder: () => void
}

export default function OrderContainer({order, removeItems, tip, setTip, resetOrder}: OrderContainerProps){


    return(
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-3">            
            <h2 className=" text-center text-2xl font-black">Consumo</h2>
            {order.length > 0 ?
                ( 
                    order.map((item) => (
                        <OrderItem
                            key={item.id}
                            item={item}
                            removeItems={removeItems}
                        />
                    ))
                ) :
                <p className=" text-center font-black">La orden esta vacia</p>
            }
            <TipForm setTip={setTip} tipValue={tip}/>
            <OrderTotals order={order} tip={tip} resetOrder={resetOrder}/>
        </div>
    )
}