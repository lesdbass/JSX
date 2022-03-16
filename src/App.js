import logo from './logo.svg';
import './App.css';
import im from '../src/imageInSrc.jpg';

function App() {
  return (


<>

    <div style={{border:"solid 1 black",maxWidth:"100vw"}}>

        <h1 className="title red">Your name here</h1>

        <br/>

          <img src={im} />

        <br/>

          <img src="/imageInPublic.jpg" /> 

    </div>


    <video width={320} height={240} controls>
  <source src="./myVideo.mp4" type="video/mp4" />
</video>

      {/* <source src={vi} type="video/mp4" width="320" height="240" controls /> */}

       {/* <source src="myVideo.mp4" type="video/mp4" width="320" height="240" controls /> */}

</>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
