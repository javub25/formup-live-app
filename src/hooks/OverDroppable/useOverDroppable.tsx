import {useState} from "react";
export const useOverDroppable = () => 
{
    const [IsOverDroppable, setIsOverDroppable] = useState<boolean>(false)
    return {IsOverDroppable, setIsOverDroppable}
}