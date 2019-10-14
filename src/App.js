import React from 'react';
import logo from './logo.svg';
import './App.css';

let titles = ['Post1', 'Post2', 'Post3' ]

function App() {
  return (
    <div className="App">

      
      <Article 
      date="Jan 30,2018"
      title="Kodak's Dubious Blockchain Gamble "
      content="What's a 130-year-old photo company doing dabbling in 
      cryptocurrency? Either revolutionizing digital rights 
      management or trying to make a quick buck."
      author="By KEVIN ROOSE"
      /> 

      <Article 
      date="Jan 30,2018"
      title="Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel"
      content="Taiwan, pushing back over encroachment on Taiwan Strait
       airspace, may leave thousands without flights home for the
     holiday."
     author="By CHRIS HORTON"
     /> 

      <Article 
      date="Jan 29,2018"
      title="New Jersey Embraces an Idea it Once Rejected:Make Utilities Pay to Emit Carbon"
      content="Democratic governors nationwide are taking steps to tax or 
      price emissions within their own borders, even as Trump 
      dismantles federal climate policy "
      author="By BRAD PLUMER"
      /> 

      </div>

  );

}

function Article(props){
  return(
    <div className="Post">
      <div class="flex">
        <div id="date">
      <h4> {props.date} </h4>
      </div>

      <div id="title">
      <h2> {props.title}</h2>
      <p>{props.content} </p>
      <h4> {props.author}</h4>
      </div>

      </div>

      <hr></hr>



      </div>

  );
      






      {/* <div class="flex-container">
        <div id="date1">
          <h4>Jan 30,2018</h4>

        </div>

        <div id="title1">
          <h3>THE SHIFT</h3>
          <h2>Kodak's Dubious Blockchain Gamble <br></br></h2>
          <p> What's a 130-year-old photo company doing dabbling in <br></br>
          cryptocurrency? Either revolutionizing digital rights <br></br> 
          management or trying to make a quick buck.
           </p>

           <h4> By KEVIN ROOSE </h4>

        </div>

        <div id="img">
        <img src="https://static01.nyt.com/images/2018/01/30/business/30ROOSE-3/30ROOSE-3-superJumbo.jpg?quality=90&auto=webp"/> 
        </div>

        </div>

        <hr></hr>


        <div class="flex-container">
        <div id="date">
          <h4>Jan 30,2018</h4>
          <img id="img1" src="" /> 

        </div>

        <div id="title">
          <h2>Taiwan Retaliates Against Chinese <br></br> Airlines, Hampering Lunar New Year <br></br>Travel</h2>
          <p> Taiwan, pushing back over encroachment on Taiwan Strait<br></br> airspace, may leave thousands without flights home for the
          <br></br> holiday.
           </p>

           <h4> By CHRIS HORTON </h4>

        </div>

        <div id="img">
        <img src="https://static01.nyt.com/images/2018/01/31/world/31taiwan-1/31taiwan-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/> 
        </div>

        </div>

        <hr></hr>

        

        <div class="flex-container">
        <div id="date">
          <h4>Jan 29,2018</h4>
          <img id="img1" src="" /> 

        </div>

        <div id="title">
          <h2>New Jersey Embraces an Idea it Once <br></br> Rejected:Make Utilities Pay to Emit<br></br> Carbon</h2>
          <p> Democratic governors nationwide are taking steps to tax or <br></br>
          price emissions within their own borders, even as Trump 
         <br></br> 
          dismantles federal climate policy 
           </p>

           <h4> By BRAD PLUMER </h4>

        </div>

        <div id="img">
        <img src="https://static01.nyt.com/images/2018/01/30/climate/30CLI-NEWJERSEY/merlin_132366125_604a2b1f-44d1-4883-b389-fedbffcf738f-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/> 
        </div>

        </div>
        <hr></hr>

         */}
        


      // </div>

      

    
  
}

export default App;
