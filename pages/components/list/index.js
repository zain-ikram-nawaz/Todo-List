import ListItem from "../listItem";
function List({arr}){
   
    const items =arr && arr.map((item,ind)=>{
return (<ListItem key={ind} text={item}/>
)

 })
    return(
        <div>
            <ul>
              {items}

            </ul>
        </div>
    )
}
export default List;