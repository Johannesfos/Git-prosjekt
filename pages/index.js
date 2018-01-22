import Link from 'next/link'
import React from 'react'
import Giphy from '../models/giphy';
import * as axios from 'axios'
import Gifpresent from '../components/gifPresent';
import { setTimeout } from 'timers';

//6Dpd4MOX3HQybXKTO04blDsjAw0oEEDq


export default class Homepage extends React.Component {

  

    constructor(){
      super();
        this.state = {
        giphys: [],
        searchVal: '',
        limit: 1,
       }
    }
    async Get_searched_gif(limit){

      event.preventDefault()

      const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: '6Dpd4MOX3HQybXKTO04blDsjAw0oEEDq',
          q: this.state.searchVal,
          limit: limit,
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      this.createSearchedGifObj(response.data.data)

    
    }
    async Get_random_gif(){

      event.preventDefault()
      const response = await axios.get('http://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: '6Dpd4MOX3HQybXKTO04blDsjAw0oEEDq',
        }
      })
      .catch(function (error) {
        console.log(error);
      });
     
      this.addRandomGif(response.data.data)

    
    }
    updateSearchval(e){         
      const text = e.target.value
      
       this.setState({
         searchVal: text,
       })
       this.Get_searched_gif(this.state.limit)    
    }
    addRandomGif(objectdata){
    
      const giphy = new Giphy(objectdata, false)

      this.setState(prevState => {
        return {
          ...prevState,
          giphys: [...prevState.giphys, giphy],

        }
        
      })

    }
    rangeUpdate(e){
      this.setState({
        limit: e.target.value
      })
      this.Get_searched_gif(this.state.limit)
      console.log(this.state.limit)

    }
    createSearchedGifObj(objectdata){
      var giphysToPush = []

      objectdata.forEach(function(item){
        const giphy = new Giphy(item, true) 
        giphysToPush = [...giphysToPush, giphy]
      })

      this.setState({
        giphys: giphysToPush,
      })

    }
    render(){
      return (
      
        <div>
    
    <style jsx>{`
    h2 {
      margin: 10px;
    }
    .actions {
        border-bottom: dotted 1px black;
        margin: 10px;
        padding-bottom: 5px;
    }
    .giphy-container {
        display: flex;
        flex-wrap:wrap;
        margin: 2px;
        font-family: arial;
        flex-direction: row;
    }
    .giphy-container input {
        outline: none;
    }

    .giphy-container button {
        outline: none;
        opacity: 0.7;
    }
    .number {
      
    }
    `}</style> 
          <h2>Gif Finder</h2>  
            <div className="actions">
            <div className="number">
              <p>How many gif do you want to show?</p>
              <input type="range" defaulValue ={this.state.limit} min={1} max={25} onChange={this.rangeUpdate.bind(this)}/>
             {this.state.limit}
             </div>
               <br />
              <input type="text" placeholder="Search..." onChange={this.updateSearchval.bind(this)} />
              <button className="randombtn" onClick={this.Get_random_gif.bind(this)}>Add Random</button>
            </div>
            <div className="giphy-container">

              {this.state.giphys.map(gif => <Gifpresent {...gif} />)}

       
           </div>
          </div> 

      )
    }



  }
 