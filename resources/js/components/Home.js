import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            shoes: [],
            count: 0
        }
    }

    addToCart() {
        this.setState((state) => {
           return { count: state.count + 1 }
        });
    }

    componentDidMount()
    {
        axios.get('/api/products')
            .then(results => {
                const shoes = results.data;
                this.setState({ shoes });
            });
    }

    componentDidUpdate() {
        document.getElementById('items').innerHTML = this.state.count;
    }

    render() {
        const box = {
            height: '200px',
            width: '200px'
        };

        return (
            <div className="container">
                <div className="row">
                    {this.state.shoes.map(shoe => (
                        <div className="card col-md-3 mr-2 ml-2 mb-2" key={ shoe.id }>
                            <div className="card-body"> 
                                <img src={'/images/' + shoe.src } className="img-thumbnail" alt="Responsive image" style={box}></img>
                                <div className="card-text">{ shoe.name } - { shoe.price }$</div>
                                <button className="btn btn-sm btn-primary" onClick={ this.addToCart }>Add</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Home