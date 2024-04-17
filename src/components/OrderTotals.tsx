import { useCallback, useMemo } from "react"
import { formatCurrency } from "../helpers"
import type { TOrderItem } from "../types"

type OrderTotalsProps = {
    order: TOrderItem[],
    tip: number,
    resetOrder: () => void,
}

export default function OrderTotals({order, tip, resetOrder}: OrderTotalsProps){

    const subTotal = useMemo(() => order.reduce((subTotal, item) => subTotal + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subTotal * tip, [tip, subTotal])
    const totalAmount = useCallback(() => subTotal + tipAmount, [tipAmount, subTotal])

    return(
        <>
            <div className="space-y-3 mt-2 border-t border-gray-400">
                <h2 className=" text-center font-black text-2xl">Totales y Propina</h2>
                <p>Subtotal a pagar:{' '}
                    <span className="font-bold">{formatCurrency(subTotal)}</span>
                </p>
                <p>Propina:{' '}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar:{' '}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>
            </div>
            <button
                className="w-full bg-sky-950 p-3 uppercase text-white font-bold mt-5 disabled:opacity-10"
                disabled={totalAmount() === 0}
                onClick={resetOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}