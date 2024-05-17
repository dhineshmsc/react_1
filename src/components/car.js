function Car(){
const carinfo ={
    brand : 'Renault',
    color : 'White'
};
const test = true;
return(
    <>
    {test ?<h2>Hi this is car page, the car details is {carinfo.brand},{carinfo.color}</h2>:'no value'
    
}</>
)

}


export default Car;