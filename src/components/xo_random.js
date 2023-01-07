import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "./xo_game.css"


class XoGamerandom extends Component {
    constructor(props) {
      super(props)
      this.x_turn = true
      this.x_win = false
      this.o_win= false
      this.x_points = 0
      this.o_points = 0
      this.x_position = []
      this.o_position = []
      this.state = {
        index_1 : "",
        index_2 : "",
        index_3 : "",
        index_4 : "",
        index_5 : "",
        index_6 : "",
        index_7 : "",
        index_8 : "",
        index_9 : "",
      }

    }

    play = (e)=>{
        if (this.x_win === false && this.o_win === false){
            if(this.x_turn === true){
                if(this.state[e.target.name] === ""){
                    this.setState ({
                        ...this.state,
                        [e.target.name] : "X"
                    })
                    this.x_position.push(e.target.name)
                    this.x_turn =false
                }
            
            }

            this.check()

        }else{
            this.setState({
                index_1 : "",
                index_2 : "",
                index_3 : "",
                index_4 : "",
                index_5 : "",
                index_6 : "",
                index_7 : "",
                index_8 : "",
                index_9 : "",
            })
            this.o_position=[];
            this.x_position= [];
            if(this.x_win === true ){
                this.x_points += 1
                alert("the Player X is the winner 🎆🎉")
                this.x_win =false
            }else{
                alert("Game Over !")
                this.o_points +=1
                this.o_win =false
            }

        }
        if(this.x_position.length === 5){
            this.setState({
                index_1 : "",
                index_2 : "",
                index_3 : "",
                index_4 : "",
                index_5 : "",
                index_6 : "",
                index_7 : "",
                index_8 : "",
                index_9 : "",
            })
            this.o_position=[];
            this.x_position= [];
        }
        
        
    }

    random_player = ()=>{
        this.random_index = parseInt(Math.random()*10 + 1 )
            this.index = "index_"+this.random_index.toString()
            while(this.x_turn === false){
                if(this.state[this.index] === "" && this.random_index!=="index_0" && this.x_position.includes(this.index)!== true && this.x_position.length < 5){
                    this.setState ({
                        ...this.state,
                        [this.index]: "O"
                    })
                    this.o_position.push(this.index)
                    this.x_turn= true
                }
                this.random_index = parseInt(Math.random()*10 ) 
                this.index = "index_"+this.random_index.toString()
                this.check()
            }
    }
    check = ()=>{
        if(this.x_position.includes("index_1") && this.x_position.includes("index_2") && this.x_position.includes("index_3")){
            this.x_win = true
        }else if(this.x_position.includes("index_4") && this.x_position.includes("index_5") && this.x_position.includes("index_6")){
            this.x_win = true
        }else if(this.x_position.includes("index_1") && this.x_position.includes("index_4") && this.x_position.includes("index_7")){
            this.x_win = true
        }else if(this.x_position.includes("index_7") && this.x_position.includes("index_8") && this.x_position.includes("index_9")){
            this.x_win = true
        }else if(this.x_position.includes("index_2") && this.x_position.includes("index_5") && this.x_position.includes("index_8")){
            this.x_win = true
        }else if(this.x_position.includes("index_3") && this.x_position.includes("index_6") && this.x_position.includes("index_9")){
            this.x_win = true
        }else if(this.x_position.includes("index_3") && this.x_position.includes("index_5") && this.x_position.includes("index_7")){
            this.x_win = true
        }else if(this.x_position.includes("index_1") && this.x_position.includes("index_5") && this.x_position.includes("index_9")){
            this.x_win = true
        }


        if(this.o_position.includes("index_1") && this.o_position.includes("index_2") && this.o_position.includes("index_3")){
            this.o_win = true
        }else if(this.o_position.includes("index_1") && this.o_position.includes("index_5") && this.o_position.includes("index_9")){
            this.o_win = true
        }else if(this.o_position.includes("index_7") && this.o_position.includes("index_8") && this.o_position.includes("index_9")){
            this.o_win = true
        }else if(this.o_position.includes("index_4") && this.o_position.includes("index_5") && this.o_position.includes("index_6")){
            this.o_win = true
        }else if(this.o_position.includes("index_1") && this.o_position.includes("index_4") && this.o_position.includes("index_7")){
            this.o_win = true
        }else if(this.o_position.includes("index_2") && this.o_position.includes("index_5") && this.o_position.includes("index_8")){
            this.o_win = true
        }else if(this.o_position.includes("index_3") && this.o_position.includes("index_6") && this.o_position.includes("index_9")){
            this.o_win = true
        }else if(this.o_position.includes("index_3") && this.o_position.includes("index_5") && this.o_position.includes("index_7")){
            this.o_win = true
        }

        
    }
    render() {
        if(this.x_turn === false){
            this.random_player()
        }
            

        return (
            <div className='p-3 bg-dark'>
                <h1 className='text-center text-light'>
                    X - O Random player
                </h1>
                <div className=' d-flext p-5 justify-content-center bg-dark row'>
                    <div className='me-5 ms-5 w-50 bg-danger p-4 rounded-4 col-8'>
                        <div className="row ">
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_1} name="index_1" />
                            </div>
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_2} name="index_2"/>
                            </div>
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_3} name="index_3"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_4} name="index_4"/>
                            </div>
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_5} name="index_5"/>
                            </div>
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_6} name="index_6"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_7} name="index_7"/>
                            </div>
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_8} name="index_8"/>
                            </div>
                            <div className="col-4 p-1">
                                <input type="text" readOnly onClick={this.play} className="form-control play_inputs" value={this.state.index_9} name="index_9"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 pt-5'>
                        <h4 className='text-light'>
                            Points
                        </h4>
                        <div className=' d-flex align-items-center'>
                            <table className='table table-secondary  border border-danger border-3 p-5'>
                                <tr>
                                    <td>
                                        <h3 className='mb-0 text-danger'>
                                            X
                                        </h3>
                                    </td>
                                    <td>
                                        <h3 className='mb-0'>
                                            {
                                                this.x_points
                                            }
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3 className='mb-0 text-danger'>
                                            O
                                        </h3>
                                    </td>
                                    <td>
                                        <h3 className=' mb-0'>
                                            {
                                                this.o_points
                                            }
                                        </h3>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default XoGamerandom;
