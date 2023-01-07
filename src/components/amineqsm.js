import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"



class Question extends Component {
    constructor(props) {
      super(props)
      this.questions =[
        {quetion : "the capital of Morroco is Rabat", verification:"true"},    // index 0

        {quetion : "A cow drink milk", verification: "false"},   // index 1

        {quetion : "Confirm Math Calculation : '81 / 9 = 9'", verification: "true"}    // index 2
      ]
      this.score = 0
      this.index = 0  // we use this variable to move between the questions 
      this.disabledB = false
      this.state = {
        userAnswer : ""
      }
    }

    getUserAnswer = (e)=>{
        this.disabledB = true 
        this.setState(
            {
                userAnswer : e.target.value
            }
        )

        if(e.target.value === this.questions[this.index].verification){
            this.score +=1
        }else{
            this.score-=1
        }
    }


    goback = ()=>{
        if (this.index >= 1 ){
            this.index -= 1 
            this.disabledB =false
            this.setState(
                {
                    userAnswer : ''
                }
            )

        }
    }


    gonext = ()=>{
        if (this.index <= this.questions.length - 2){
            this.index +=1 
            this.disabledB = false
            this.setState (
                {
                    userAnswer :""
                }
            )
        }
    }
        render(){
        return(
            <div>
                <div className="bg-light p-5">
                    <p>
                        {
                            this.questions[this.index].quetion
                        }
                    </p>
                    <button value="true" className="btn btn-primary me-3" onClick={this.getUserAnswer} disabled = {this.disabledB}>True</button> 
                    <button value="false" className="btn btn-danger" onClick={this.getUserAnswer} disabled = {this.disabledB}>False</button> 
                    <div className='pt-5'>
                        score : {
                    this.score
                }
                    </div>
                </div>
                <div>
                     <button className='btn btn-dark me-5' onClick={this.goback} >
                        back
                    </button>
                    <button className='btn btn-dark' onClick={this.gonext}>
                        next
                    </button>
                </div>

            </div>
        )
    }
}


export default Question