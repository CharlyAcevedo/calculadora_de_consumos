import React from "react"
import { tipOptions } from "../data/db"

type TipFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tipValue: number
}

export default function TipForm({setTip, tipValue}: TipFormProps){

    return(
        <div>
            <h3 className=" text-center text-xl font-black">Propina:</h3>
            <form className="grid grid-cols-2">
                {tipOptions.map(tip => (
                    <div key={tip.id} className="flex gap-2">
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input 
                            id={tip.id}
                            type="radio"
                            name="tip"
                            value={tip.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tip.value === tipValue}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}