import coin from '../static/imgs/coin.svg';

function Header() {
    return (
        <div className="header">
            <h1>STEM Club Mouse Trap Car Parts Shop</h1>
            <button><img src={coin} alt="Coin image"></img></button>
            <p>Select your team, then click on the item that you would like to purchase. Click on an item under your team name to return the item.</p>
        </div>
    )
}

export default Header;