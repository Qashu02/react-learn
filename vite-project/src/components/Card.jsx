export const Card = ()=>{

    const name ='dog';
    const img='dogs.jpeg'
  const age=27;
    // function watch(){

    //     const age=14;
    //     if (age<18){
    //         return 'not avaliable'
    //     }
    //     return "watch now"
    // }
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
      {/*conditional value in react */}
      <button>{age>18 ? 'Watch now': 'not available'}</button>
    {/* <button> {watch()}</button> */}
    </div> );
    };