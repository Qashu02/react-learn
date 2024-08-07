// we cannot return multiple elements through react because when compiler xompile it. it changed to an object so js function cannot be return the multiple object at the same time  so we make a div first to handle it 
// but in our Documnet the new extra node added that we dosesnot need 

// we use fragments to prevent from extra nodes fragment can also be declare with <> </>.
// it dosesnot added extra node in our DOM import { Fragment } from "react";

//  we can also return the other elements by using array with passing its key like return [ Card key="1",....]

// import { Fragment } from "react";


export const App =() =>{
  return( <>


    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </>
    
    
    );
    // return( <React.Fragment>
{/* 

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </React.Fragment>
      
      
      );
return( <Fragment>


<Card/>
<Card/>
<Card/>
<Card/>  // return( <React.Fragment>
<Card/>
<Card/>
<Card/>
<Card/>
</Fragment>


); */}
  };

 const Card = ()=>{
    return( <div>

    
    <div>
      <img src="dogs.jpeg" alt=""/>
  </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, reiciendis.</p>
      <button>Submit</button>
  </div> );
  };