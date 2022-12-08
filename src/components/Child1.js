import { useContext } from "react"
import { DataContext } from "../providers/datacontext"
import { SecondContext } from "../providers/secondcontext"

const Child = () => {
    const data = useContext(DataContext)
    const student = useContext(SecondContext)
    return (
        <div>
        <div>Name: {data.name}</div>
        <div>Student: {student.name}</div>
        </div>
    )
}

export default Child