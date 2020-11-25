import React from "react";
import E_Inicio from "./E_Inicio";
function layout(props){
return(
<>
< E_Inicio />
{props.children}
</>
)
}
export default layout;