
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
export default function SubjectDetail() {
  let { code } = useParams();
  const [subject, setSubject] = useState({});
  // const [subjectDetails, setSubjectDetails] = useState({})
  useEffect(() => {
    fetch(`http://localhost:3001/get-subject-by-code?code=${code}`)
      .then(response => response.json())
      .then(body => {
        setSubject({
          "Code" : body.code,
          "Title" : body.title,
          "Description": body.desc,
          "Units": body.units,
          "Sems Offered": `${body.sem_offered[0]}, ${body.sem_offered[1]}`
        })
        // setSubjectDetails([{
        //   "Code" : subject.code,
        //   "Title" : subject.title,
        //   "Description": subject.desc,
        //   "Units": subject.units,
        //   "Sem Offered": subject.sem_offered}])
      }  )

    // fetch('http://localhost:3001/greet-by-post', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name: "Kat" })
    // })
    //   .then(response => response.text())
    //   .then(body => {
    //     setGreeting(body)
    //   })
  },[])

 

  return (
    <>
      
      
      <ul id="details">
      <h1>{code}</h1>
      {
        //subject.map(([key, value], index)=><li key={index}>{key}: {value}</li>)

        // subjectDetails.map(([key, value], index) => <li key={index}>{key} : {value}</li>)

        Object.entries(subject).map(([key, value], index) => {
          return (
                <li key={index}>{key} : {value}</li>
          )
        })
      }

      </ul>
 
    </>
  );
}