import React  from 'react';
import {Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
import Login from "./../../assets/icons/login.js";
import Search from "./../../assets/icons/search.js";
import Cart from "./../../assets/icons/cart.js";
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

function NavbarClient(props){
    const toggle = false;
    const isOpen = false;
    return (
        <header>
            <div className="anouncement" >Free shipping on orders over 1.000.000đ</div>
            <Navbar className="pt-4" expand="md">
                <div className="d-flex m-auto">
                    <Link exact to="" className="mr-3">
                        <img src="https://cdn.shopify.com/s/files/1/1687/1083/files/logo_Mollyclo_2019-white_230x.png?v=1589367272" alt="homeLogo"></img>
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/products">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">BLOGS</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    SHOP
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        NEW ARRIVAL
                                    </DropdownItem>
                                    <DropdownItem>
                                        IN STOCK
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        TOPWEARS
                                    </DropdownItem>
                                    <DropdownItem>
                                        HEADWEARS
                                    </DropdownItem>
                                    <DropdownItem>
                                        BOTTOMS
                                    </DropdownItem>
                                    <DropdownItem>
                                        DENIM
                                    </DropdownItem>
                                    <DropdownItem>
                                        OUTERWEAR
                                    </DropdownItem>
                                    <DropdownItem>
                                        ACCESSORIES
                                    </DropdownItem>
                                    <DropdownItem>
                                        SALE
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink to="/products">COLLECTIONS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">BLOGS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">#MOLLYCLO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">CONTACT</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className="icons">
                            <Login/>
                            <div id="navCart">
                                <NavLink exact to="/cart">
                                    <Cart/>
                                    <div className="qty">{props.cart_total}</div>
                                </NavLink>
                            </div>
                            <Search/>
                        </NavbarText>
                    </Collapse>
                </div>
            </Navbar>
        </header> 
    );
}

const mapStateToProps = (state) =>{
    const total = state.cart.reduce((sum,product)=>{
        return sum = product.quantity + sum;
    },0)
    return {
        cart_total: total
    }
}

export default connect(mapStateToProps)(NavbarClient)