import { useState } from "react";

export default function Componenty() {
  let [right, setRight] = useState();
  let options = [
    { answer: "Apple", statee: false },
    { answer: "Bananas", statee: true },
    { answer: "none of the above", statee: false },
  ];
  return (
    <div className="quiz">
      <h1>Humans share more than 50% of their DNS with which fruit?!</h1>
      <div>
        {options.map((i) => {
          return(
            <button onClick={()=>setRight(i.statee)} className="btn">
            <p> {i.answer}</p> 
              <div style={{ backgroundColor: "blue",display:"flex",justifyContent:"center" , alignItems:"center", marginLeft:"330px",fontSize:"1.2rem"}}>
                { right && right === i.statee ? "that's correct!" : ""}
              </div>
            </button>
          );

        }
        )
        }
      </div>

    </div>
  );
}
