//  we can access javascript code in html by using dynamic value .


export const App =() =>{
  return( <>


    <Card/>
    <Card/>
   
    </>
    
    
    );
  
  };

 const Card = ()=>{

  const name ='dog';
  const img='dogs.jpeg'

  function eating(){
    const eat='food ';
    return eat
   }

    return( <div>

    
    <div>
{/* Dynamic value in jsx */}
      <img src={img} alt=""/>
  </div>
  {/* dynamic text in jsx */}
    <p>{name}</p>
    {/* Dynamic Expression in jsx*/}
    <p>age={12+4}</p>
  {/* Dynamic function in jsx */}
    <p>{eating()}</p>
  </div> );
  };