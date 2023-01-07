// import {React, Component} from "react"
// import "bootstrap/dist/js/bootstrap.min.js"
// import "bootstrap/dist/css/bootstrap.min.css"


// class Test extends Component {
//     constructor(props) {
//       super(props)
//     this.edudients =[]
//     this.groupes=[{
//             nom : "simo",
//             prenom : "mn203",
//             grp : "fs-203"       
//         },{
//             nom : "smail",
//             prenom : "ouchkaih",
//             grp : "fs-203"       
//         },{
//             nom : "amine",
//             prenom : "Djohar",
//             grp : "fs-203"       
//         },{
//             nom : "wtf",
//             prenom : "bro",
//             grp : "fs-204"       
//         },{
//             nom : "hamza",
//             prenom : "boukhqr",
//             grp : "fs-204"       
//         },{
//             nom : "Imad",
//             prenom : "jamossi",
//             grp : "fs-204"       
//         }
        
//     ]

//       this.state = {
//         groupe : ""
//       }
//     }

//     check=(e)=>{
//         this.edudients=[]
//         this.setState(
//             {
//                 groupe : e.target.value
//             }
//         )
//         this.groupes.map((item)=>{
//             if(e.target.value === item.grp){
//                 this.edudients.push(item)
//             }
//         })

//     }
   
//     render() {
//         return (
//             <div className="container-fluid mt-5">
//                 <div className="row">

//                     <div className="col">
//                         <select className="form-select" onChange={this.check}>
//                             <option value="fs-203">groupe fs-203</option>
//                             <option value="fs-204">groupe fs-204</option>
//                         </select>
//                     </div>
    
//                 </div>
                
//             </div>
//         );
//     }
// }

// export default Test;

import {React, Component} from "react"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"


class Test extends Component {
    constructor(props) {
      super(props)
    this.edudients =[]
    this.groupes=[{
            nom : "simo",
            prenom : "mn203",
            grp : "fs-203"       
        },{
            nom : "smail",
            prenom : "ouchkaih",
            grp : "fs-203"       
        },{
            nom : "amine",
            prenom : "Djohar",
            grp : "fs-203"       
        },{
            nom : "wtf",
            prenom : "bro",
            grp : "fs-204"       
        },{
            nom : "hamza",
            prenom : "boukhqr",
            grp : "fs-204"       
        },{
            nom : "Imad",
            prenom : "jamossi",
            grp : "fs-204"       
        }
        
    ]

      this.state = {
        groupe : ""
      }
    }

    choice=(e)=>{
        this.edudients=[]
        this.setState(
            {
                groupe : e.target.value
            }
        )
        this.groupes.map((item)=>{
            if(e.target.value === item.grp){
                this.edudients.push(item)
            }
        })

    }
   
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row">

                    <div className="col">
                        <select className="form-select" onChange={this.choice}>
                            <option value="fs-203">groupe fs-203</option>
                            <option value="fs-204">groupe fs-204</option>
                        </select>
                    </div>
    
                </div>
                <div>
                    <table>
                        <tr key="">
                            <th>
                                NOm
                            </th>
                            <th>
                                Prenom
                            </th>
                        </tr>
                    {
                        this.edudients.map(item=>(
                            <tr>
                                <td>
                                    {
                                        item.nom
                                    }
                                </td>
                                <td>
                                    {
                                        item.prenom 
                                    }
                                </td>
                            </tr>
                        ))
                    }
                    </table>
                </div>
            </div>
        );
    }
}

export default Test;


