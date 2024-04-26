import React, {useState} from 'react';

import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Teams from './Teams';
import Conformation from './Conformation';

import '../static/styles.css';

const budget = 15;

// name : [price, qty, num per purchase, desc]
// 'item': [0, 0, 0, 'text'],
const items = {
  'Mousetrap' : [1, 4, 1, 'This is the engine of the car and is needed for every build.'],
  'Custom Cardboard Car Body': [1, 20, 1, 'You may design your own cardboard car body however you like. (Use scissors)'],
  'Custom Wooden Car Body': [3, 8, 1, 'You may design your own wooden car body however you like. Your design will be laser cut and delivered next class. (Cut out a piece of printer paper to your exact dimensions.)'],
  'Small Grippy Wheels for Skewer': [2, 4, 4, 'These wheels have a diameter of ~50mm and have permanent rubber bands attached for grip. The inside hole is designed to fit a skewer.'],
  'Small Grippy Wheels for 1/4" Dowel': [2, 4, 4, 'These wheels have a diameter of ~50mm and have permanent rubber bands attached for grip. The inside hole is designed to fit a 1/4" dowel.'],
  'Medium Grippy Wheels for Skewer': [4, 4, 4, 'These wheels have a diameter of ~70mm and have rubber bands attached for grip. The rubber bands may be removed if needed. The inside hole is designed to fit a skewer.'],
  'Medium Grippy Wheels for 1/4" Dowel': [4, 4, 4, 'These wheels have a diameter of ~70mm and have rubber bands attached for grip. The rubber bands may be removed if needed. The inside hole is designed to fit a 1/4" dowel.'],
  'Large Grippy Wheels for Skewer': [5, 4, 4, 'These wheels have a diameter of ~90mm and have rubber bands attached for grip. The rubber bands may be removed if needed. The inside hole is designed to fit a skewer.'],
  'Large Grippy Wheels for 1/4" Dowel': [5, 4, 4, 'These wheels have a diameter of ~90mm and have rubber bands attached for grip. The rubber bands may be removed if needed. The inside hole is designed to fit a 1/4" dowel.'],
  'CD Wheels for Skewer': [6, 4, 4, 'These wheels are extra thin and have adapters designed to fit a skewer. Beware of balance and stability when using these wheels.'],
  'CD Wheels for 1/4" Dowel': [6, 4, 4, 'These wheels are extra thin and have adapters designed to fit a 1/4" dowel. Beware of balance and stability when using these wheels.'],
  '11" Laser Cut Wheel': [6, 1, 1, 'This wheel is extremely large and will grant the most mechanical advantage. The inner hole is designed to fit with the 1/4" dowel.'],
  'Custom Grippy Wheels': [5, 16, 4, 'These wheels can be customized to whatever specification you provide. They will be 3D printed and delivered next class. (Fill out custom grippy wheel form to make request)'],
  'Custom Laser Cut Wheel': [7, 4, 1, 'This wheel can be customized to whatever specification your provide. They will be laser cut and delivered next class. (Fill out custom laser cut wheel form to make request)'],
  'Skewer': [1, 10, 2, 'These can act as the axles for the wheels and can easily fit inside of straws for ease of mounting to the car body.'],
  '1/4" Dowel': [1, 4, 2, 'These are more rigid than the axles and cannot fit inside of straws, however they can fit into 6mm bearings.'],
  'Straw': [1, 8, 2, 'These can be used to mount the wheels with the skewer axles onto the car body. However, they will not work with the 1/4" dowel.'],
  'Ball Bearings': [2, 0, 4, 'These will allow the wheels to spin much quicker, minimizing the friction between the car body and the axle. You must use the 1/4" dowel axles to use this item effectively.'],
  'Ball Bearing Holders': [1, 0, 4, 'These holders will allow for easy attachment of the ball bearings to the car body. Alternatively, you may design a Custom Wooden Car Body to house the ball bearings.'],
  '4" Wooden Lever Arm': [3, 1, 1, 'Lever arms are used to increase mechanical advantage by increasing the distance traveled by the arm of the mousetrap. This is the shortest of all the lever arms.'],
  '8" Wooden Lever Arm': [4, 1, 1, 'Lever arms are used to increase mechanical advantage by increasing the distance traveled by the arm of the mousetrap. This is the second shortest of all the lever arms.'],
  '12" Wooden Lever Arm': [5, 1, 1, 'Lever arms are used to increase mechanical advantage by increasing the distance traveled by the arm of the mousetrap. This is the average length the lever arms.'],
  '16" Brass Lever Arm': [6, 1, 1, 'Lever arms are used to increase mechanical advantage by increasing the distance traveled by the arm of the mousetrap. This is the second longest of all the lever arms.'],
  '20" Brass Lever Arm': [7, 1, 1, 'Lever arms are used to increase mechanical advantage by increasing the distance traveled by the arm of the mousetrap. This is the longest of all the lever arms.'],
}

function App() {

  const [t1, SetT1] = useState({'key': 1, 'name': 'Team 1', 'budget': budget, 'items': []});
  const [t2, SetT2] = useState({'key': 2, 'name': 'Team 2', 'budget': budget, 'items': []});
  const [t3, SetT3] = useState({'key': 3, 'name': 'Team 3', 'budget': budget, 'items': []});
  const [t4, SetT4] = useState({'key': 4, 'name': 'Team 4', 'budget': budget, 'items': []});
  
  const [currTeam, SetCurrTeam] = useState(1);

  // Initialize quantities from items
  const initialQuantities = Object.keys(items).reduce((acc, key) => {
    acc[key] = items[key][1]; // get the quantity from items
    return acc;
  }, {});

  const [quantities, setQuantities] = useState(initialQuantities);

  return (
    <main>
      <Header />
      <Conformation />
      <div id="content" className="content">
        <div className="teams-container">
          <Teams team={t1} setTeam={SetT1} currTeam={currTeam} setCurrTeam={SetCurrTeam} setQuantity={setQuantities} items={items} />
          <Teams team={t2} setTeam={SetT2} currTeam={currTeam} setCurrTeam={SetCurrTeam} setQuantity={setQuantities} items={items}/>
          <Teams team={t3} setTeam={SetT3} currTeam={currTeam} setCurrTeam={SetCurrTeam} setQuantity={setQuantities} items={items}/>
          <Teams team={t4} setTeam={SetT4} currTeam={currTeam} setCurrTeam={SetCurrTeam} setQuantity={setQuantities} items={items}/>
        </div>
        

        <hr />
        
        <div className="cards-container">
          {
            Object.keys(items).map((key, index) => (
              <Card key={key} name={key} desc={items[key][3]} index={index} price={items[key][0]} quantity={quantities[key]} setQuantity={setQuantities} numPurchase={items[key][2]} currTeam={currTeam} team1={t1} team2={t2} team3={t3} team4={t4} setTeam1={SetT1} setTeam2={SetT2} setTeam3={SetT3} setTeam4={SetT4} items={items} />
            ))
          }
        </div>
      </div>
      <Footer />
    </main>
    
  );
}

export default App;
