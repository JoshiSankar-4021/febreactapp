
function Internalcss(){
    const styles={
        heading:{
            border:"5px solid black",
            color:"yellow",
            background:"pink",
            borderColor:"green",
            borderStyle:"dotted",
            borderWidth:"10px"
        },
        heading1:{
            border:"5px dashed black",
            color:"red",
            background:"yellow"
        },
        heading2:{
            border:"5px dotted black",
            color:"red",
            background:"yellow"
        },
         heading3:{
            border:"5px doubled black",
            color:"red",
            background:"yellow"
        },
         heading4:{
            border:"5px groove black",
            color:"red",
            background:"yellow"
        },
         heading5:{
            border:"5px ridge black",
            color:"red",
            background:"yellow"
        },
         heading6:{
            border:"5px inset black",
            color:"red",
            background:"yellow"
        },
         heading7:{
            border:"5px outset black",
            color:"red",
            background:"yellow"
        }

    }
    return(
    <div>
        <h1 style={styles.heading}>Border</h1>
        <h1 style={styles.heading1}>Dahed Border</h1>
        <h1 style={styles.heading2}>Dotted Border</h1>
        <h1 style={styles.heading3}>doubled Border</h1>
        <h1 style={styles.heading4}>groove Border</h1>
        <h1 style={styles.heading5}>ridge Border</h1>
        <h1 style={styles.heading6}>inset Border</h1>
        <h1 style={styles.heading7}>outset Border</h1>


    </div>
);
}export default Internalcss;