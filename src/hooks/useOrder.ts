import { useState } from "react"
import type { TMenuItem, TOrderItem } from "../types"

export default function useOrder(){

    const [order, setOrder] = useState<TOrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: TMenuItem) => {
        const isItemInOrder = order.find(i => i.id ===item.id)
        if(isItemInOrder){
            const newOrderItem = order.map((orderItem) => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity + 1} :
                orderItem
            )
            setOrder(newOrderItem)
        } else {
            const newItem: TOrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItems = (id: TOrderItem['id']) => {
        setOrder(() => order.filter((item) => item.id !== id))
    }

    const resetOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItems,
        resetOrder
    }
}