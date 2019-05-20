import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


 class Discount extends React.Component {

    state  ={
        discountStart:0,
        discountEnd:10
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }

    }

    componentDidUpdate () {
        setTimeout (() => {
            this.percentage()
        }, 90)
    }

    render() {
        return (
            <div className = "center_wrapper">
                <div className = "discount_wrapper">
                <Fade
                 onReveal = {() => this.percentage()}
                 >

                    <div className="discount_percentage">
                        <span> {this.state.discountStart}%</span>
                        <span> Off </span>
                    </div>
                </Fade>
            <Slide right>
                <div className ="discount_description">
                    <h3> Early Bird Discount</h3>
                    <p> Book before (TBD) and get a 10% discount</p>

                    <div> Button </div>
                </div>
            </Slide>
            </div>
        </div>
        );
    }
}

export default Discount;