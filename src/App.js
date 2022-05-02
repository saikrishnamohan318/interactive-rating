import image from './images/icon-star.svg';
import image1 from './images/illustration-thank-you.svg';
import './App.css';

function App() {
  const labelone = () => {
    document.getElementById("label1").style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById("label1").style.color = "white";
    document.getElementById("label2").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label3").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label4").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label5").style.backgroundColor = "hsl(216, 12%, 8%)";
  }
  const labeltwo = () => {
    document.getElementById("label2").style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById("label2").style.color = "white";
    document.getElementById("label1").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label3").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label4").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label5").style.backgroundColor = "hsl(216, 12%, 8%)";
  }
  const labelthree = () => {
    document.getElementById("label3").style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById("label3").style.color = "white";
    document.getElementById("label2").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label1").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label4").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label5").style.backgroundColor = "hsl(216, 12%, 8%)";
  }
  const labelfour = () => {
    document.getElementById("label4").style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById("label4").style.color = "white";
    document.getElementById("label2").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label3").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label1").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label5").style.backgroundColor = "hsl(216, 12%, 8%)";
  }
  const labelfive = () => {
    document.getElementById("label5").style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById("label5").style.color = "white";
    document.getElementById("label2").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label3").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label4").style.backgroundColor = "hsl(216, 12%, 8%)";
    document.getElementById("label1").style.backgroundColor = "hsl(216, 12%, 8%)";
  }
  const submit = () => {
    var one = document.getElementById("one");
    var two = document.getElementById("two");        
    var three = document.getElementById("three");
    var four  = document.getElementById("four");
    var five = document.getElementById("five");
    
    if(one.checked){
        document.getElementById("div1").style.display = "none";
        document.getElementById("addrating").innerHTML = "You selected "+one.value+" out of 5";
        document.getElementById("div2").style.display = "block";
    }else if(two.checked){
        document.getElementById("div1").style.display = "none";
        document.getElementById("addrating").innerHTML = "You selected "+two.value+" out of 5";
        document.getElementById("div2").style.display = "block";
    }else if(three.checked){
        document.getElementById("div1").style.display = "none";
        document.getElementById("addrating").innerHTML = "You selected "+three.value+" out of 5";
        document.getElementById("div2").style.display = "block";
    }else if(four.checked){
        document.getElementById("div1").style.display = "none";
        document.getElementById("addrating").innerHTML = "You selected "+four.value+" out of 5";
        document.getElementById("div2").style.display = "block";
    }else if(five.checked){
        document.getElementById("div1").style.display = "none";
        document.getElementById("addrating").innerHTML = "You selected "+five.value+" out of 5";
        document.getElementById("div2").style.display = "block";
    }
  }  
  return (
    <div>
      <div className="container" id="div1">
        <img src={image} alt="star" className="img" />
        <h1 className="h1">How did we do?</h1>
        <p className="para">Please let us know how we did with your support request. All feedback is appreciated 
         to help us improve our offering!</p>
        <div className="radio">
          <input type="radio" name="rating" className="rating" onClick={labelone} id="one" value="1" /><label id="label1" htmlFor="one">1</label>
          <input type="radio" name="rating" className="rating" onClick={labeltwo} id="two" value="2" /><label id="label2" htmlFor="two">2</label>
          <input type="radio" name="rating" className="rating" onClick={labelthree} id="three" value="3" /><label id="label3" htmlFor="three">3</label>
          <input type="radio" name="rating" className="rating" onClick={labelfour} id="four" value="4" /><label id="label4" htmlFor="four">4</label>
          <input type="radio" name="rating" className="rating" onClick={labelfive} id="five" value="5" /><label id="label5" htmlFor="five">5</label>
        </div>
        <br />        
        <button type="submit" onClick={submit} className="submit" id="submit">Submit</button>
      </div>
      <div className="container" id="div2">
        <img src={image1} alt="thankyou" />
        <p id="addrating"></p>
        <h1>Thank you!</h1>        
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
          don't hesitate to get in touch!</p>
      </div>
    </div>
  );
}

      
export default App;
