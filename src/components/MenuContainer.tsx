import MenuItem from "./MenuItems";
import { menuItems } from "../data/db";
import type { TMenuItem } from "../types";

type MenuContainerProps = {
    addItem: (item: TMenuItem) => void,
}

export default function MenuContainer({addItem}: MenuContainerProps) {

    const areMenuItems: boolean = menuItems.length > 0

    return(
        <div className=" p-5">
            <h2 className=" text-center text-2xl font-black">Menu</h2>
            <div className=" space-y-2 mt-3">
                { areMenuItems ? 
                    menuItems.map((item) => (
                        <MenuItem 
                            key={item.id}
                            item={item}
                            addItem={addItem}
                        />
                    )) :
                    <p>No hay items en el menu actualmente</p>
                }

            </div>
        </div>
    )
}