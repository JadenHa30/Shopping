import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row,
    Col
  } from 'reactstrap';
import Login from "./../../assets/icons/login.js";
import Search from "./../../assets/icons/search.js";
let img=["//product.hstatic.net/1000363124/product/z2163314844091_62d7670cc2be27c3ef1a45b3ec382a88_99e8924137c84ab8a100113327d0e0d3_grande.jpg","//product.hstatic.net/1000363124/product/z2163314765741_b22c9890d3a3f47f7d1fa4b321b00ee6_53cd5597645f4c8399353a68343c0b33_grande.jpg","//product.hstatic.net/1000363124/product/z2169839694160_01936ddb609f92bf41cf08c5ebcdd6ed_670f7e36d8a542ad8b715465a978632d_grande.jpg","//product.hstatic.net/1000363124/product/z2169839741701_9a92bc76d6618932e55405576d21b5af_0d108a5f74ad44249cd19823d3d36876_grande.jpg","//product.hstatic.net/1000363124/product/z2164282924477_0e3a6e07af3cfd78bc9fc07d69d9e864_79714e0a114141d485da5a30854d5609_grande.jpg","//product.hstatic.net/1000363124/product/z2164282912206_d479c8368245c93afe2519d419b44e93_b38ad7fc083646568dabebaf83d5f88b_grande.jpg","//product.hstatic.net/1000363124/product/z2147161204670_b0e976dc8df226e90520f6ef8d8f2043_4d7bed8b312540c980b75dcff161daa8_grande.jpg","//product.hstatic.net/1000363124/product/z2147161179590_e2f500d9c7edc2673c6b6927bea0b1bc_f078104142624eee9077104ea4f96273_grande.jpg","//product.hstatic.net/1000363124/product/z2145287178851_f85dfc9288eca7b36da60a3166966d55_bcadffa6c0c84d9c8a1d2ecb4962d2bc_grande.jpg","//product.hstatic.net/1000363124/product/z2145287146463_60fc02892baa1e1ddf57ee84f5f79af1_2427cbb47f14493aa318a8c8088f4ff3_grande.jpg","//product.hstatic.net/1000363124/product/z2132118308096_e9f49937ab0dc622d0bcb332a6f77fe3_1141ccddb3cb4bf5a8dd8c9f439e4b9f_grande.jpg","//product.hstatic.net/1000363124/product/z2132118187550_e189551a0c0d115cd1dddd16cb8d58a4_409fdf30412a4793b3d3c65fdd08e03b_grande.jpg","//product.hstatic.net/1000363124/product/z2096278559461_621523a3f80a525ffdba42ff0d8acb17_9b4a19f96ec743cab785b412d18231fc_grande.jpg","//product.hstatic.net/1000363124/product/z2096278408453_f8058af3b785379a08573dab393decc2_5765314c0efb44e5b36c464eceae4e03_grande.jpg","//product.hstatic.net/1000363124/product/z2090871822423_33c093960615d1630ef6448536b6265a_3dbb788cdf874c94b14ff5fdca8f76db_grande.jpg","//product.hstatic.net/1000363124/product/z2090871760742_813e010a9ede164208c668bee4a7134e_04f3b1134bdc45549f699f32946f2cf4_grande.jpg","//product.hstatic.net/1000363124/product/z2080565476431_c23d5d1d69d20b9bdc4a16c98a4487dd_28303bee0e374e1995b49833eaecd205_grande.jpg","//product.hstatic.net/1000363124/product/z2080565437274_a1fddec50bb4c66c1f2326785584f023_e4f9a9c364b5438b8cd71567340ca038_grande.jpg","//product.hstatic.net/1000363124/product/z2064327466786_39cf4bae351404c58fc1c1afc11349e2_1a9d5c32a7a44b25920a459e3dfafc3c_grande.jpg","//product.hstatic.net/1000363124/product/z2064327502041_7d570ac919f93be7fd0041f55c7c0c9b_f724db921ac045078791a6bb258438ac_grande.jpg","//product.hstatic.net/1000363124/product/z2000185056996_a50bd677c755845ef0b3ee7d0639be40_b8c75b130f8a43639aef8114a50d341f_grande.jpg","//product.hstatic.net/1000363124/product/img_7032_18c9bf08c37e40b4ad793bd8b0f532e3_grande.jpg","//product.hstatic.net/1000363124/product/116000647_3022828571146441_3884703185098658318_o_724585f0ec874e30bd49a09d36aa288a_grande.jpg","//product.hstatic.net/1000363124/product/115962271_3022828397813125_48020584016567216_o_aa699f2c0b784ea4b95cf63a515368b1_grande.jpg","//product.hstatic.net/1000363124/product/z1985014154960_c830fc12ffbd51529d88a38849d38fd3_1b9bb3b253fc407c9f44ff9da8518f03_grande.jpg","//product.hstatic.net/1000363124/product/z1985014159107_2d2178eb4a9ff43ec6338667696d5c4b_b5a039181ef6442abd76b4fcbc18921f_grande.jpg","//product.hstatic.net/1000363124/product/z2066174954909_e738baab0345b3ce097257c7b2713536_03cef622d51543fcacc99f628ae6a947_grande.jpg","//product.hstatic.net/1000363124/product/z2066174931926_cf7eede83b81fe766652fe6bf5eb942a_b0771df7570f41f987fd94570e8feb83_grande.jpg","//product.hstatic.net/1000363124/product/z2045992299615_dda8e9a154a13d8c06f20a2fa8ddeb15_be69bfc85a924b18b09ccbfc6f83bb64_grande.jpg","//product.hstatic.net/1000363124/product/z2045992283038_39b329378fc63a65615a8d4a31d930e8_4d8fe1250f84492784562dfdabf48de5_grande.jpg","//product.hstatic.net/1000363124/product/z2038641809164_1dba70a25bde2ed602951129f8778b21_833f127537a4495e847b521d45eebe8b_grande.jpg","//product.hstatic.net/1000363124/product/z2038641809165_c16b198a0d59fe8e34285e9ca7385ebe_e6614cc041d0405496b0184380568537_grande.jpg","//product.hstatic.net/1000363124/product/z2046427708632_f2524570e3fa7f7a11a8bfd9d86411b8_14ee6e8206bb4e4fa7b267983d3fe9fc_grande.jpg","//product.hstatic.net/1000363124/product/z2046427711952_a87122188a3ad39669cea80dbb812218_0b351b3c04134c868b714682ac7258ce_grande.jpg","//product.hstatic.net/1000363124/product/z2046427761267_93d5cff740f57ba9a5eda8375f9b53df_76ba3afcdb924d5ea5c0707e387557fd_grande.jpg","//product.hstatic.net/1000363124/product/z2046427750635_0dbaa26f66f9264b28dfb3225ec63167_a38a4007e8b94cda9344d7d4e3a87e48_grande.jpg","//product.hstatic.net/1000363124/product/z2046427730029_bf942954ea7c086207cc28a2d79f9a26_9cdac40e0c454dea8a262f2ccb80f658_grande.jpg","//product.hstatic.net/1000363124/product/z2046427738443_1cca51b6ab29731f71815a1c7ad4d523_890e816b7e4345248080c3a8f661bbe2_grande.jpg","//product.hstatic.net/1000363124/product/photo_2020-08-27_11-23-51__2__ab8510aae21f41f4a2c77b4f9cb8e9ef_grande.jpg","//product.hstatic.net/1000363124/product/photo_2020-08-27_11-23-58_021e642483d74db8b88d873a89aed26a_grande.jpg"];

export default function AllProducts(){
    const toggle = false;
    const isOpen = false;
    return (
        <>
            <header>
                <div className="anouncement" >Free shipping on orders over 1.000.000đ</div>
                <Navbar className="pt-4" expand="md">
                    <div className="d-flex m-auto">
                        <div className="mr-3">
                            <img src="https://cdn.shopify.com/s/files/1/1687/1083/files/logo_Mollyclo_2019-white_230x.png?v=1589367272"></img>
                        </div>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">BLOGS</NavLink>
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
            </header>    
            <Container>
                <Row>
                    <Col md={3}>
                        filter
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={3}>
                                clothes
                            </Col>
                            <Col md={3}>
                                clothes
                            </Col>
                            <Col md={3}>
                                clothes
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                clothes
                            </Col>
                            <Col md={3}>
                                clothes
                            </Col>
                            <Col md={3}>
                                clothes
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}