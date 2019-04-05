import React from 'react';
import './Tour.scss';

// eslint-disable-next-line no-undef
class Tour extends React.Component {
 state = {
     showInfo:false
 }
 handleInfo = () => {
     this.setState({
         showInfo:!this.state.showInfo
     })
 }
  render() {
   const{ id,city, img, name, info } = this.props.tour;
   const {removeTour} = this.props;
   return (
       <article className="tour">
           <div className="img-container">
                <img src={img} alt=""></img>
                <span className="close-btn" onClick={()=>{removeTour(id)}}>
                    <i className="fas fa-window-close" />
                </span>
           </div>
           <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info{" "}
                    <span onClick={this.handleInfo}>
                        <i className="fas fa-caret-square-down"></i>
                    </span>
                </h5>
                {this.state.showInfo && <p>{info}</p>}
           </div>
       </article>
   );
  };
}

export default Tour; 
