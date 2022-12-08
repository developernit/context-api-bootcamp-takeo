import { useContext } from "react"
import { DataContext } from "../providers/datacontext"

const Child2 = () => {
    const data = useContext(DataContext)
    return (
        <div>Age: {data.age}</div>
    )
}

export default Child2