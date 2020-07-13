
const contactSection = ( function () {
    
    let restoNames = ['Taman Ratu', 
        'Citra Garden', 
        'Gading Serpong', 
        'Kelapa Gading',
    ];

    let restoAddresses = ['Jl. Surya Wijaya Raya 1 No. 8, Sunrise Taman Ratu, Jakarta Barat, DKI Jakarta',
        'Ruko Citra 6 Blok J1A No. 19, Citra Garden, Kalideres, Jakarta Barat, DKI Jakarta', 
        'Ruko Golden 8 Blok G no 5, Jl. Ki Hajar Dewantara, Gading Serpong, Tangerang',
        'Jl. Summagung III blok K5 No. 2A, Kelapa Gading, Jakarta Utara, DKI Jakarta',
    ];

    let restoMaps = [];

    let expressNames = ['MOI',
    'Permata Hijau', 
    'Sawah Besar',
    ];

    let expressAddresses = ['Mall of Indonesia, LG floor, Pasar MOI, Jl. Boulevard Barat Raya, Kelapa Gading, Jakarta Utara',
    'PHX Permata Hijau, Jl. Arteri Permata Hijau no. 5, Kebayoran Lama, Jakarta Selatan',
    'BOXX IN, 1st floor, Jl Sukarjo Wiryopranoto no 2, Sawah Besar, Jakarta Pusat. DKI Jakarta'
    ];

    let expressMaps = [];

    function render() {
        let content = document.querySelector('#actual-content');


        for (let i=0; i<restoNames.length; i++) {
            
            let areaName = document.createElement('div');
            let areaAddr = document.createElement('div');
            let location = document.createElement('div');

            location.classList.add('location');
            areaName.classList.add('area-name');
            areaAddr.classList.add('address');
            
            areaName.innerText = restoNames[i];
            areaAddr.innerText = restoAddresses[i];

            location.append(areaName, areaAddr);
            content.append(location);
        }

        for (let i=0; i<expressNames.length; i++) {
            let areaName = document.createElement('div');
            let areaAddr = document.createElement('div');
            let location = document.createElement('div');

            location.classList.add('location');
            areaName.classList.add('area-name');
            areaAddr.classList.add('address');
            
            areaName.innerText = expressNames[i];
            areaAddr.innerText = expressAddresses[i];

            location.append(areaName, areaAddr);
            content.append(location);

        }
    }

    return { render }
})()

export { contactSection }