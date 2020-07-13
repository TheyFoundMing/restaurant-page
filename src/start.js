
const initialStart = ( function() { 

    function render() {
        let tabnames = ['About', 'Menu', 'Find Us']

        let content = document.querySelector('#content');

        let navBar = document.createElement('nav');
        let logo = document.createElement('img');
        let tabs = document.createElement('div');

        let front = document.createElement('div')
        let background = document.createElement('img');
        let heading = document.createElement('h1');

        let actualContent = document.createElement('div');

        logo.id = 'logo';
        tabs.id = 'tabs';

        front.id = 'front';
        heading.id = 'heading';
        actualContent.id = 'actual-content';

        background.classList.add('background');

        for (let i=0; i<tabnames.length; i++) {
            let tab = document.createElement('span');
            
            tab.classList.add('tab');
            tab.innerText = tabnames[i];

            tabs.appendChild(tab);
        }

        background.src = 'img/background.jpg';
        logo.src = 'img/logo.png';

        heading.innerText = 'A NEW THRIVING BUSINESS IN THE PORK-BASED FOOD INDUSTRY';

        navBar.append(logo, tabs);
        front.append(background, heading);

        content.append(navBar, front, actualContent);
    
    }

    return { render }
})()

export { initialStart }