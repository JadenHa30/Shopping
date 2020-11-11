import React  from 'react';
import {Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
import Login from "./../../assets/icons/login.js";
import Search from "./../../assets/icons/search.js";
import {Link} from 'react-router-dom';

export default function NavbarClient(){
    const toggle = false;
    const isOpen = false;
    return (
        <Navbar className="pt-4" expand="md">
            <div className="d-flex m-auto">
                <Link to="/products" className="mr-3">
                    <img src="https://cdn.shopify.com/s/files/1/1687/1083/files/logo_Mollyclo_2019-white_230x.png?v=1589367272" alt="homeLogo"></img>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">BLOGS</NavLink>
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
                            <NavLink href="">COLLECTIONS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">BLOGS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">#MOLLYCLO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText className="icons">
                        <Login/>
                        <Search/>
                    </NavbarText>
                </Collapse>
            </div>
        </Navbar> 
    );
}
