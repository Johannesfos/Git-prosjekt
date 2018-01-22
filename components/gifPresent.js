import React from 'react'

export default class Gifpresent extends React.Component {

render(){

    const {title, img_url} = this.props
    return (
        
        <div className="gif-box">
            
            <h2>{title}</h2><br />
            <img src={img_url} />

            <style jsx>{`
            .gif-box{    
            background-color: white;
            border-radius:5px;
            border: dashed 1px black ;
            margin: 5px;
            width: 210px;
            padding 5px;
            flex-wrap: wrap;
            justify-content: center;
            
          }
          .gif-box h2 {
              font-size: 1em;
          }
            
            
            `}</style>
        </div>

    )
}




}