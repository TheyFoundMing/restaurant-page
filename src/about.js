
const aboutSection = (function (){

    function render() {
        let content = document.querySelector('#actual-content');

        let title = document.createElement('h1');
        let first = document.createElement('p');
        let second = document.createElement('p');
        let mission = document.createElement('p');
    
        title.innerText = 'About';
        first.innerText = "The idea of German Pork Knuckle inspired the founding partners to unlock the full potential of Pork Knuckle as an ingredient. So back in 2015, after months of experimenting and perfecting the recipe, they discovered a Pork Knuckle dish that taste so good, they knew they had to share it right away. As time goes on, the partners found out that the demand for our food increased from day to day basis and that is when the Pork Knuckle over rice platter was born. Ok, let's not forget about the awesome Sambal Matah and Sambal Hijau!";
        second.innerText = "This website was created by TheyFoundMing (Michaella) in order to improve on my skills, HogHock is indeed a real restaurant located in Indonesia and I truly enjoy eating there.";
        mission.innerText = "Our main mission is continuously improve the quality of our food and services in order to exceed customers increasing expectations.";
    
        content.appendChild(title);
        content.appendChild(first);
        content.appendChild(second);
        content.appendChild(mission);
    }

    return {render}; 
})();

// aboutSection.render();

export { aboutSection };