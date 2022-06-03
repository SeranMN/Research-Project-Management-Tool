import React,{ useState } from "react"
import ViewDocuments from "./ViewDocuments"
import ViewSubmissions from "./ViewSubmissions"



const EvaluateDocuments = () => {
    const [viewDoc,setViewDoc] = useState(true)
    const [viewSubmission,setViewSubmission] = useState(false)
    const[subType,setSubType] = useState('')

    return (
        <div>
            {viewDoc &&
                <ViewDocuments setViewDoc={setViewDoc} setViewSubmission={setViewSubmission} setSubType={setSubType}/>
            }
             {viewSubmission &&
                <ViewSubmissions subType={subType}/>
            }
        </div>
    )
}

export default EvaluateDocuments