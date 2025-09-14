import { useState } from "react";
import Card from "../components/ui/Card";

function Home() {
    /*
      Components : In React JS, components are the fundamental building blocks of user interfaces. They are independent, reusable pieces of code that define the structure and behavior of a part of the UI.
  
      Types of Components
      1. Class Components
      2. Functional Components
  
      What is State in React ?
      Answers : State is plain java script object. it holds the information about a component's current condition.
      
      */
    let [skills, setSkills] = useState([
        "HTML",
        "CSS",
        "React.js",
        "Next.js",
        "Java",
        "Spring boot",
        "Mongodb",
        "SQL",
        "Docker",
        "Kubernatees",
        "AWS",
    ]);

    let [counter, setCounter] = useState(1);




    const increseCounter = () => {
        setCounter(prev => prev + 4)
    }

    //  api fetch --- data use help 

    return (
        <>
            <div>
                <div className="skills-containers">
                    {skills.map((item, index) => {
                        return <Card skill={item} sNo={index + 1} />
                        // props key ---- {}
                    })
                    }
                </div>

                <div className="counter-container">
                    <label htmlFor="counter">{counter}</label>
                    <button onClick={increseCounter} className="btn-click">Click</button>



                </div>
            </div>
        </>
    );
}

export default Home;
