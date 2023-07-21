import React from 'react'
import Title from "../Title";
import Layout from "../Layout";
import Question from "../Question"; // Import the Question component

export default function Test() {
  const questions = [
    {
      text: "Little interest or pleasure in doing things?",
      name: "p1-q1",
    },
    {
      text: "Feeling down, depressed, or hopeless? ",
      name: "p1-q2",
    },
  ];
  const questions2 = [
    {
      text: "Feeling more irritated, grouchy, or angry than usual?",
      name: "p2-q1",
    },
  ];
  const questions3 = [
    {
      text: "Sleeping less than usual, but still have a lot of energy? ",
      name: "p3-q1",
    },
    {
      text: "Starting lots more projects than usual or doing more risky things than usual?",
      name: "p3-q2",
    },
  ];  
  const questions4 = [
    {
      text: "Feeling nervous, anxious, frightened, worried, or on edge?",
      name: "p4-q1",
    },
    {
      text: "Feeling panic or being frightened?",
      name: "p4-q2",
    },
    {
      text: "Avoiding situations that make you anxious? ",
      name: "p4-q3",
    },
  ];
  const questions5 = [
    {
      text: "Unexplained aches and pains (e.g., head, back, joints, abdomen, legs)?",
      name: "p5-q1",
    },
    {
      text: "Feeling that your illnesses are not being taken seriously enough? ",
      name: "p5-q2",
    }
  ];
  const questions6 = [
    {
      text: "Thoughts of actually hurting yourself?",
      name: "p6-q1",
    }
  ];
  const questions7 = [
    {
      text: "Hearing things other people couldn’t hear, such as voices even when no one was around?",
      name: "p7-q1",
    },
    {
      text: "Feeling that someone could hear your thoughts, or that you could hear what another person was thinking?",
      name: "p7-q2",
    }
  ];
  const questions8 = [
    {
      text: "Problems with sleep that affected your sleep quality over all?",
      name: "p8-q1",
    },
  ];
  const questions9 = [
    {
      text: "Problems with memory (e.g., learning new information) or with location (e.g., finding your way home)?",
      name: "p9-q1",
    },
  ];  
  const questions10 = [
    {
      text: "Unpleasant thoughts, urges, or images that repeatedly enter your mind?",
      name: "p10-q1",
    },
    {
      text: "Feeling driven to perform certain behaviors or mental acts over and over again?",
      name: "p10-q2",
    },
  ];
  const questions11 = [
    {
      text: "Feeling detached or distant from yourself, your body, your physical surroundings, or your memories?",
      name: "p11-q1",
    },
  ];  
  const questions12 = [
    {
      text: "Not knowing who you really are or what you want out of life?",
      name: "p12-q1",
    },
    {
      text: "Not feeling close to other people or enjoying your relationships with them?",
      name: "p12-q2",
    },
  ];
  const questions13 = [
    {
      text: "Drinking at least 4 drinks of any kind of alcohol in a single day?",
      name: "p13-q1",
    },
    {
      text: "Smoking any cigarettes, a cigar, or pipe, or using snuff or chewing tobacco?",
      name: "p13-q2",
    },
    {
      text: "Using any of the following medicines ON YOUR OWN, that is, without a doctor’s prescription, in greater amounts or longer than prescribed [e.g., painkillers (like Vicodin), stimulants (like Ritalin or Adderall), sedatives or tranquilizers (like sleeping pills or Valium), or drugs like marijuana, cocaine or crack, club drugs (like ecstasy), hallucinogens (like LSD), heroin, inhalants or solvents (like glue), or methamphetamine (like speed)]?",
      name: "p13-q3",
    },
  ];

  // Define a function to handle the form submission
  const handleSubmit = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();
    // Loop through the questions and get the selected values
    questions.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });
    questions2.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });
    questions3.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });    
    questions4.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    }); 
    questions5.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });
    questions6.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });    
    questions7.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });   
    questions8.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });  
    questions9.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });      
    questions10.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });    
    questions11.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });    
    questions12.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });    
    questions13.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });
  };

  return (
    <>
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto text-white">
        <Title fontColor="text-white">Instructions</Title>
        <p className='max-w-[70%] text-center mx-auto'>
          The questions below ask about things that might have bothered you. For
          each question, circle the number that best describes how much (or how
          often) you have been bothered by each problem during the{" "}
          <b>past TWO (2) WEEKS</b> .
        </p>

        {/* button guides */}
        <div className="grid grid-cols-5 gap-4 my-7 items-center justify-center">
          <div className="text-center">
            <b>None</b>
            <br />
            (Not at all)
          </div>
          <div className="text-center">
            <b>Slight</b>
            <br />
            (Rare,less than a day)
          </div>
          <div className="text-center">
            <b>Mild</b>
            <br />
            (More than half a days)
          </div>
          <div className="text-center">
            <b>Moderate</b>
            <br />
            (Not at all)
          </div>
          <div className="text-center">
            <b>Severe</b>
            <br />
            (Nearly every day)
          </div>
        </div>
        
      </div>
      <Layout>
        <div className="text-center sm:max-w-[80%] max-w-[90%] mx-auto py-10">
          <form className="text-center font-bold py-3" onSubmit={handleSubmit}>
            {/* Part I */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part I.</h3>
            {questions.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>
            {/* Part II */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part II.</h3>
            {questions2.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>            
            {/* Part III */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part III.</h3>
            {questions3.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>         
            {/* Part IV */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part IV.</h3>
            {questions4.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>         
            {/* Part V */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part V.</h3>
            {questions5.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>       
            {/* Part VI */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part VI.</h3>
            {questions6.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>     
            {/* Part VII */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part VII.</h3>
            {questions7.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div> 
            {/* Part VIII */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part VIII.</h3>
            {questions8.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>
            {/* Part IX */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part IX.</h3>
            {questions9.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>
            {/* Part X */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part X.</h3>
            {questions10.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>
            {/* Part XI */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part XI.</h3>
            {questions11.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>
            {/* Part XII */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part XII.</h3>
            {questions12.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>
            {/* Part XIII */}
            <h3 className="sm:text-2xl text-lg font-bold my-9">Part XIII.</h3>
            {questions13.map((question) => (
              <Question question={question} />
            ))}
            <div className='h-[0.1rem] rounded-2xl my-14 w-full bg-gray-500'></div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

