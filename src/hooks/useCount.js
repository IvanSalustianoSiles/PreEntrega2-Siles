import { useEffect, useState } from "react"

export const useCount = (max, min = 0, initial = 0) => {
    const [count, setCount] = useState(initial);


    const increment = () => {
        count < max && setCount(count + 1);
    }

    const decrement = () => {
       count > min && setCount(count - 1);
    }
    return {
        count,
        increment,
        decrement
    }
}