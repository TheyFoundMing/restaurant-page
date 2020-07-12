
const menuSection = (function () {
 
    function render() {

        let foodnames = ['Pork Knuckle Original', 'Pork Knuckle Matah', 'BBQ Pork Belly'];
        let descriptions = ['Stir-Fry Tender Pork Knuckle served with rice, crispy pork skin and special green chili.',
                'Stir-Fry Tender Pork Knuckle served with rice, crispy pork skin and special matah condiment.',
                'BBQ Pork Belly served with rice and special green chili.'];

        let content = document.querySelector('#actual-content');
        let menu = document.createElement('div');

        let PorkBelly = document.createElement('img');
        let PorkKnuckle = document.createElement('img');

        PorkBelly.src = 'img/PorkBelly.jpg';
        PorkKnuckle.src = 'img/PorkKnuckle.jpg';

        menu.append(PorkBelly, PorkKnuckle);

        for (let i=0; i<foodnames.length; i++) {
            let food = document.createElement('div');
            let name = document.createElement('h5');
            let desc = document.createElement('span')

            food.classList.add('food');
            name.classList.add('food-name');
            desc.classList.add('food-desc');

            name.innerText = foodnames[i];
            desc.innerText = descriptions[i];

            food.appendChild(name);
            food.appendChild(desc);
            menu.appendChild(food);
        }

        content.appendChild(menu);
    }

    return  {render}
})();

export { menuSection };
