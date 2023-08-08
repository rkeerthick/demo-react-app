import {useState} from 'react'

import Form from "./Form";

export default function FormWrapper() {
    const[details, setDetails] = useState([])

    function addTask(title, startDate, endDate, desc, asignment, level, stus, RCA) {
        setDetails([...details, {
            id:title,
            title:title,
            startDate:startDate,
            endDate:endDate,
            desc:desc,
            assignment:asignment,
            level:level,
            status:stus,
            rca:RCA
        }])
    }

    console.log(details)

    return (
        <div>
            <Form addTask={addTask} />
        </div>
    )
}