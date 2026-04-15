
import Card from "../Card/Card";

 const loadData = async ()=>{
        try{
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);
        }catch(error){
            console.log("Error:", error);
        }
    };
loadData();
const Cards = () => {
   
    // const data=use(loadData());
    return (
        <Card></Card>
    );
};

export default Cards;