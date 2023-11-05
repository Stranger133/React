const NavBar = (props) => {
    return (
        <>
            <nav>
                <div className="nav-bar">
                    <div className="nav-item logo"><img src={props.logo} alt="My Library" id="logo"/></div>
                    <div className="nav-item link"><a className="recommend" href="#footer" >Recommend a Book</a></div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;