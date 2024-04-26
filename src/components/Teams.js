import React, { useState } from 'react';

import defaultPfp from '../static/imgs/defaultpfp.svg';

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

function Teams(props) {

    const [selectedImages, setSelectedImages] = useState({});

    const handleFileChange = (teamKey) => (event) => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            setSelectedImages(prevImages => ({
                ...prevImages,
                [teamKey]: URL.createObjectURL(file)
            }));
        } else {
            setSelectedImages(prevImages => {
                const { [teamKey]: _, ...rest } = prevImages;
                return rest;
            });
        }
    };

    function teamClicked() {
        props.setCurrTeam(props.team.key);
    }

    function canceled() {
        const conf = document.getElementById("conf");
        const confCard = document.getElementById("conf-card");
        if (conf && confCard) {
            conf.classList.remove('show');
            confCard.classList.remove('show');
        }
    }

    function returned(item, index) {
        props.setTeam(prevTeam => {
                let itemsCopy = [...prevTeam.items];
                itemsCopy.splice(index, 1)
                return {
                    ...prevTeam,
                    items: itemsCopy
                };
            })

            props.setQuantity(prevQuantities => ({
                ...prevQuantities,
                [item] : prevQuantities[item] + props.items[item][2]
            }));

            props.setTeam(prevTeam => ({
                ...prevTeam,
                budget: prevTeam.budget + props.items[item][0]
            }));
        canceled();
    }

    function itmClicked(item, index) {
        const conf = document.getElementById("conf");
        const confCard = document.getElementById("conf-card");
        const confCancel = document.getElementById("conf-cancel");
        const confReturn = document.getElementById("conf-return");

        confCancel.onclick = canceled;
        confReturn.onclick = () => { returned(item, index) };

        conf.addEventListener('click', canceled);
        conf.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        conf.classList.remove('initial');
        confCard.classList.remove('initial');
        conf.classList.add('show');
        confCard.classList.add('show');
    }

    function handleInputChange(event) {
        props.setTeam(prevTeam => ({
            ...prevTeam,
            name: event.target.value
        }));
    }

    return (
        <button title="Click to select team" className={props.currTeam === props.team.key ? "team-button selected" : "team-button"} onClick={teamClicked}>
            <input type="file" id={`file-input-${props.team.key}`} style={{display: "none"}} onChange={handleFileChange(props.team.key)} />
            <button title="Click to change profile picture." className="team-pfp" onClick={() => document.getElementById(`file-input-${props.team.key}`).click()}>
                <img src={selectedImages[props.team.key] || defaultPfp} alt={`Team ${props.team.name} profile pic`} ></img>
            </button>
            
            <input title="Click to change team name" placeholder="Team Name" value={props.team.name} onChange={event => handleInputChange(event)} className="team-name"></input>
            <ul className="team-inv">
                {props.team.items.map(([firstItem, secondItem, thirdItem, ...rest], index) => (
                    <li key={index}>
                        <button title={`${firstItem}\nQty: ${secondItem}\nClick to return`} onClick={() => itmClicked(firstItem, index)}>
                            <img src={images[thirdItem]} alt={firstItem} className="inv-img"></img>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="team-money">
                {
                    [...Array(props.team.budget)].map((_, index) => (
                        <img title={`$${props.team.budget}`} key={index} src={money} alt="Dollar bill image" className="bill"></img>
                    ))
                }
            </div>
        </button>
    )
}

export default Teams;