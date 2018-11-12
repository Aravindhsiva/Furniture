import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.jpg';
import one from './img/one.jpg';
import two from './img/two.jpg';
import three from './img/three.jpg';
import {
  Row,Col,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Card, CardBody,CardTitle,
} from 'reactstrap';
import lang from './img/lang.png';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const cur={
      display:'inline',
    };
    const color={
      backgroundColor:'#000',
      border:'none',
      marginTop:'-5px'
    };
     return (
      <div>
        <div className="woods">
          <div className="container base">
          <Row>
            <Col>
            <p className="active">HOME</p><p>SPECIALS</p><p>SITEMAP</p><p>CONTACT</p>
            </Col>
            <Col className="text-right">
            <h5 style={cur}>Currency : </h5>
            <select>
              <option value="Dollar">Dollar</option>
              <option value="Rupee">Rupee</option>
              <option value="Yen">Yen</option>
            </select>
            &emsp;
            <img src={lang} alt="langs" className="langs"/>
            </Col>
          </Row>
          </div>
          <div className="container furn">
          <Row>
            <Col xs="6">
            <img className="logopic" src={logo} alt="Store Logo"/>
          <br/><p className="text-secondary"> &emsp;the best quality products for you</p>
            </Col>
            <Col xs="6 text-right username">
            <p className="username">Welcome,Username (<span className="yellowtext">Log Out</span>) | <span className="yellowtext"> My Account </span>|<span className="yellowtext"> Cart </span>: (empty)</p><br/>
            <input type="text" placeholder="Search" className="searchbox"/>&nbsp;<button className="gobut">Go!</button>
            </Col>
          </Row>
          <Row>
            <div className="nav">
                <Col><span>Home Furnitures</span></Col>
                <Col><span>Armoire</span></Col>
                <Col><span>Bookcases</span></Col>
                <Col><span>Closet Storage</span></Col>
                <Col><span>Coffee Tables</span></Col>
                <Col><span>
                   <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle style={color} caret>Computer Carts</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Items Offered : </DropdownItem>
                        <DropdownItem disabled>Connectors</DropdownItem>
                        <DropdownItem>Electronics</DropdownItem>
                        <DropdownItem>Accessories</DropdownItem>
                      </DropdownMenu>
                  </ButtonDropdown></span></Col>
                  <Col><span>Computer Desks</span></Col>
            </div>
          </Row>
          </div>
            </div>

            
        <div className="home">
        <div className="container">
        <Row>
          <Col xs="9" className="interior">
            <Col xs="8 text-center">
            <h2 className="new text-center">New</h2>
            <h2 className="text-center">DESIGNER FURNITURE!</h2>
            <h2 className="elite"><span>elite</span> collections</h2>
            <button className="view btn btn-warning">View Collections</button>
            </Col>
            <Col xs="4">
              
            </Col>
          </Col>
          <Col xs="3 chair text-right">
            <h1 className="chelite">Elite</h1><h1 className="ch">Chairs</h1>
            <h1 className="off">50% Off</h1>
            <button className="view">View More</button>
          </Col>
        </Row>
        </div>
        <div className="product container">
          <Row>
            <Col xs="9" className="disp">
              <h5><i className="faicon fa fa-angle-double-right"></i> Featured Products</h5>
              <Row>
              <Col xs="4"><Cards source={one} name="5 Cool Upholstered Swivel..."/></Col>
              <Col xs="4"><Cards source={two} name="5 Cool Upholstered Swivel..."/></Col>
              <Col xs="4"><Cards source={three} name="Bedroom furniture by Huelsta"/></Col>
              </Row>
            </Col>
            <Col xs="3">
              <Row>
                <Col className="cart">
                  <p className="hfive"><i className="carticon fa fa-angle-double-right"></i> Cart &nbsp;<i className="fa fa-caret-up"></i></p>
                </Col>
              </Row>
              <Row>
                <Col className="noprod">
                    <Row>
                      <Col className="text-center"><p className="noprodpara">No products</p></Col>
                      <Col></Col>
                    </Row>
                  <div className="input"><p className="cartpara">Shipping<span className="pull-right">$0.00</span></p></div>
                  <div className="input"><p className="cartpara">Total<span className="pull-right">$0.00</span></p></div><br/>
                    <Row>
                      <Col>
                       <div className="nxtinput"><p className="nextpara">Cart</p></div>
                      </Col>
                    <Col>
                      <div className="nxtinput"><p className="nextpara">Checkout</p></div>
                    </Col>
                    </Row>
                </Col>
              </Row>
              <Row className="lips">
               <p><span>FREE</span><br/>SHIPPING</p>
              </Row>
              <Row className="know text-center">
                  <p><i className="fa fa-angle-double-right"></i> Learn More About Free Shipping</p>
              </Row>
            </Col>
            <hr/>
          </Row>
          <Row className="footer">
           <h5>Specials  &#8729; New  products  &#8729; Top sellers  &#8729; Contact us  &#8729; Terms and conditions of use  &#8729;  About us<br/>&copy;2010 Powered by PrestaShop &trade; All rights reserved</h5> 
          </Row>
        </div>
        <h4 className="made">Made with <i class="fa fa-heart" aria-hidden="true"></i> using React</h4>
        </div>
      </div>
    );
  }
}
class Cards extends Component {
  render() {
    const size={
      fontSize:'12px',
      color:'brown',
    };
    const si={
      fontSize:'12px',
      fontWeight:'Bolder',
      display:'inline',
      textAlign:'right'
    };
    const cardw={
      padding:'5px'
    }
    return (
      <div>
        <Card className="cards">
                <CardBody style={cardw}>
                  <CardTitle style={size}>{this.props.name}</CardTitle>
                </CardBody>
                <img width="100%" src={this.props.source} alt="furniture" />
                <CardBody style={si}>
                  <span className="amount text-right">$350.00</span> &emsp;<button className="butt">Add to Cart</button>
                </CardBody>
            </Card>
      </div>
    );
}
}
export default App;
