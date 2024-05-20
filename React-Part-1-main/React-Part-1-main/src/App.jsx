import CoreConcept from "./assets/coreConcepts/CoreConcept";
import imageCompt from "./assets/components.png";
import image1 from "./assets/jsx-ui.png";
import image2 from "./assets/config.png";
import image3 from "./assets/state-mgmt.png";  
import { useState } from "react";
import picture from "./assets/react-core-concepts.png";
import SemiHeader from "./assets/Header/header";


function App() {
  const topHeader = 
    {
      img: picture,
      title: 'React Essentials',
      description: 
      'Fundamental React concepts you will need for almost any app you are going to build!'
    }
  ;
  const [Program, setProgram] = useState(
    [
      {
          image: imageCompt,
          title: 'Components',
          description: 
          'The core UI building block - compose the user interface by combining multiple components.'
      },
      {
        image: image1,
        title: 'JSX',
        description: 
          'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
      },
      {
        image: image2,
        title: 'Props',
        description: 
          'Make components configurable (and therefore reusable) by passing input data to them.'
      },
      {
        image: image3,
        title: 'State',
        description: 
          'React-managed data which, when cahnged, causes the component to re-render & the UI to update.'
      }
    ]
  );
  return (
    <div>
      <main>
        <header>
        <SemiHeader
        img={topHeader.img}
        title={topHeader.title}
        description={topHeader.description}
          />
    </header>
        <section id="core-concepts">
          <ul>
            {components.map((components)  => {
              console.log(components);
              return (
              <CoreConcept 
            image={components.image}
            title={components.title}
            description={components.description}
          />
            );
        })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
