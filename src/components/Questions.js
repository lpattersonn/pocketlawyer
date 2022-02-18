import react from "react";

import { useQuery } from 'react-query';

export default function Questions(props) {
  console.log(props.subject)   
  const arr = props.getQuestion('Traffic')
  console.log(arr)


  


  return (
     
      <section>
      <h1>props.subject</h1>
        </section>
  );
    }