import React, { useState, useEffect } from 'react';

import money from '../static/imgs/money.svg';

import itm1 from '../static/imgs/1.png';
import itm2 from '../static/imgs/2.png';
import itm3 from '../static/imgs/3.png';
import itm4 from '../static/imgs/4.png';
import itm5 from '../static/imgs/5.png';
import itm6 from '../static/imgs/6.png';
import itm7 from '../static/imgs/7.png';
import itm8 from '../static/imgs/8.png';
import itm9 from '../static/imgs/9.png';
import itm10 from '../static/imgs/10.png';
import itm11 from '../static/imgs/11.png';
import itm12 from '../static/imgs/12.png';
import itm13 from '../static/imgs/13.png';
import itm14 from '../static/imgs/14.png';
import itm15 from '../static/imgs/15.png';
import itm16 from '../static/imgs/16.png';
import itm17 from '../static/imgs/17.png';
import itm18 from '../static/imgs/18.png';
import itm19 from '../static/imgs/19.png';
import itm20 from '../static/imgs/20.png';
import itm21 from '../static/imgs/21.png';
import itm22 from '../static/imgs/22.png';
import itm23 from '../static/imgs/23.png';
import itm24 from '../static/imgs/24.png';

let images = [itm1, itm2, itm3, itm4, itm5, itm6, itm7, itm8, itm9, itm10, itm11, itm12, itm13, itm14, itm15, itm16, itm17, itm18, itm19, itm20, itm21, itm22, itm23, itm24];

function Card(props) {

    const name = props.name;

    const [disable, setDisable] = useState(false);

    useEffect(() => {
        if (props.quantity >= props.numPurchase) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [props.quantity]);

    function addItemToTeam(itemName, quantity, price) {
        switch (props.currTeam) {
            case 1:
                props.setTeam1(prevTeam => ({
                    ...prevTeam,
                    budget: prevTeam.budget - price,
                    items: [...prevTeam.items, [itemName, quantity, Object.keys(props.items).indexOf(itemName)]]
                }));
                break;
            case 2:
                props.setTeam2(prevTeam => ({
                    ...prevTeam,
                    budget: prevTeam.budget - price,
                    items: [...prevTeam.items, [itemName, quantity, Object.keys(props.items).indexOf(itemName)]]
                }));
                break;
            case 3:
                props.setTeam3(prevTeam => ({
                    ...prevTeam,
                    budget: prevTeam.budget - price,
                    items: [...prevTeam.items, [itemName, quantity, Object.keys(props.items).indexOf(itemName)]]
                }));
                break;
            case 4:
                props.setTeam4(prevTeam => ({
                    ...prevTeam,
                    budget: prevTeam.budget - price,
                    items: [...prevTeam.items, [itemName, quantity, Object.keys(props.items).indexOf(itemName)]]
                }));
                break;
            default:
            console.log("Team not found");
        }
    }
    
    function buyItem() {
        props.setQuantity(prevQuantities => ({
            ...prevQuantities,
            [name] : prevQuantities[name] > props.numPurchase ? prevQuantities[name] - props.numPurchase : 0
        }));

        addItemToTeam(props.name, props.numPurchase, props.price);
    }

    function purchaseSuccess(element) {
        requestAnimationFrame(() => {
            element.style.backgroundColor = "#35c02b88";
            setTimeout(function() {
                element.style.backgroundColor = ""; // reset to original color
            }, 400); // 5000 milliseconds = 5 seconds
        });
    }

    function purchaseFail(element) {
        requestAnimationFrame(() => {
            element.style.backgroundColor = "#ff000088";
            setTimeout(function() {
                element.style.backgroundColor = ""; // reset to original color
            }, 400); // 5000 milliseconds = 5 seconds
        });
    }

    function btnClicked(name) {
        let element = document.getElementById(name)

        switch (props.currTeam) {
            case 1:
                if (props.team1.budget >= props.price) {
                    purchaseSuccess(element);
                    buyItem();
                } else {
                    purchaseFail(element);
                }
                break;
            case 2:
                if (props.team2.budget >= props.price) {
                    purchaseSuccess(element);
                    buyItem();
                } else {
                    purchaseFail(element);
                }
                break;
            case 3:
                if (props.team3.budget >= props.price) {
                    purchaseSuccess(element);
                    buyItem();
                } else {
                    purchaseFail(element);
                }
                break;
            case 4:
                if (props.team4.budget >= props.price) {
                    purchaseSuccess(element);
                    buyItem();
                } else {
                    purchaseFail(element);
                }
                break;
            default:
                console.log("Team not found")
        }
        
    }
    console.log(props.index);
    return (
        <button title="Click to buy item" disabled={disable} className='item-container' id={props.name} onClick={() => btnClicked(props.name)}>
            <img src={images[props.index]} alt={`${props.name} image`} className="itm-img"></img>
            <div className="itm-details">
                <h1 className="itm-label">{props.name}</h1>
                <h2 className="itm-desc">{props.desc}</h2>
                <h3 className="itm-qty">Quantity: {props.quantity}</h3>
                <h3 className="itm-num">Number Per Purchase: {props.numPurchase}</h3>
                <div className="item-money">
                    {
                        [...Array(props.price)].map((_, index) => (
                            <img title={`$${props.price}`} key={index} src={money} alt="Dollar bill image" className="bill"></img>
                        ))
                    }
                </div>
            </div>
            <p className="itm-dir">Click to purchase</p>
        </button>
    )

}

export default Card;