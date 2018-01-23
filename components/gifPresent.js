import React from 'react'
import FadeIn from 'react-fade-in'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Gifpresent extends React.Component {
  render() {
    const { title, img_url } = this.props
    return (
      <div className="gif-box">
        <h2>{title}</h2>
        <br />

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

          .example-enter {
            opacity: 0.01;
          }
          
          .example-enter.example-enter-active {
            opacity: 1;
            transition: opacity 500ms ease-in;
          }
          
          .example-leave {
            opacity: 1;
          }
          
          .example-leave.example-leave-active {
            opacity: 0.01;
            transition: opacity 300ms ease-in;
          }
         
            
            
            `}</style>
      </div>
    )
  }
}
