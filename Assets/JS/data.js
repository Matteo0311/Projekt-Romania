const varosok = [
    {
        rang: "1",
        varos: "Bukarest",
        megye: "Bukarest",
        lakossag: "1 716 983",
        terulet: "228 km²",
        link: "#bukarest"
    },
    {
        rang: "2",
        varos: "Kolozsvár",
        megye: "Kolozs",
        lakossag: "286 598",
        terulet: "179 km²",
        link: "#kolozsvar"
    },
    {
        rang: "3",
        varos: "Temesvár",
        megye: "Temes",
        lakossag: "250 849",
        terulet: "130 km²",
        link: "#temesvar"
    },
    {
        rang: "4",
        varos: "Jászvásár",
        megye: "Iași",
        lakossag: "271 692",
        terulet: "94 km²",
        link: "#jaszvasar"
    },
    {
        rang: "5",
        varos: "Konstanca",
        megye: "Konstanca",
        lakossag: "264 930",
        terulet: "125 km²",
        link: "#konstanca"
    },
    {
        rang: "6",
        varos: "Szatmárnémeti",
        megye: "Szatmár",
        lakossag: "152 374",
        terulet: "127 km²",
        link: "#szatmarnemeti"
    },
    {
        rang: "7",
        varos: "Ploiești",
        megye: "Prahova",
        lakossag: "255 000",
        terulet: "60 km²",
        link: "#ploiesti"
    },
    {
        rang: "8",
        varos: "Brassó",
        megye: "Brassó",
        lakossag: "253 200",
        terulet: "267 km²",
        link: "#brasso"
    },
    {
        rang: "9",
        varos: "Craiova",
        megye: "Dolj",
        lakossag: "269 506",
        terulet: "81 km²",
        link: "#craiva"
    },
    {
        rang: "10",
        varos: "Galac",
        megye: "Galac",
        lakossag: "298 000",
        terulet: "246 km²",
        link: "#galac"
    },
    {
        rang: "11",
        varos: "Iași",
        megye: "Iași",
        lakossag: "290 422",
        terulet: "92 km²",
        link: "#iasi"
    },
    {
        rang: "12",
        varos: "Arad",
        megye: "Arad",
        lakossag: "159 000",
        terulet: "236 km²",
        link: "#arad"
    },
    {
        rang: "13",
        varos: "Marosvásárhely",
        megye: "Maros",
        lakossag: "157 000",
        terulet: "56 km²",
        link: "#marosvasarhely"
    },
    {
        rang: "14",
        varos: "Suceava",
        megye: "Suceava",
        lakossag: "115 000",
        terulet: "58 km²",
        link: "#suceava"
    },
    {
        rang: "15",
        varos: "Bacău",
        megye: "Bacău",
        lakossag: "144 000",
        terulet: "45 km²",
        link: "#bacau"
    },
    {
        rang: "16",
        varos: "Focșani",
        megye: "Vrancea",
        lakossag: "100 000",
        terulet: "88 km²",
        link: "#focsani"
    },
    {
        rang: "17",
        varos: "Târgu Mureș",
        megye: "Maros",
        lakossag: "146 000",
        terulet: "69 km²",
        link: "#targumures"
    },
    {
        rang: "18",
        varos: "Oradea",
        megye: "Bihor",
        lakossag: "196 367",
        terulet: "112 km²",
        link: "#oradea"
    },
    {
        rang: "19",
        varos: "Drobeta-Turnu Severin",
        megye: "Mehedinți",
        lakossag: "94 000",
        terulet: "120 km²",
        link: "#drobeta"
    },
    {
        rang: "20",
        varos: "Slatina",
        megye: "Olt",
        lakossag: "75 000",
        terulet: "85 km²",
        link: "#slatina"
    },
    {
        rang: "21",
        varos: "Timișoara",
        megye: "Timiș",
        lakossag: "319 279",
        terulet: "130 km²",
        link: "#timisoara"
    },
    {
        rang: "22",
        varos: "Buzău",
        megye: "Buzău",
        lakossag: "120 000",
        terulet: "50 km²",
        link: "#buzau"
    },
    {
        rang: "23",
        varos: "Vaslui",
        megye: "Vaslui",
        lakossag: "55 000",
        terulet: "70 km²",
        link: "#vaslui"
    },
    {
        rang: "24",
        varos: "Pitești",
        megye: "Argeș",
        lakossag: "155 000",
        terulet: "80 km²",
        link: "#pitesti"
    },
    {
        rang: "25",
        varos: "Reșița",
        megye: "Caraș-Severin",
        lakossag: "75 000",
        terulet: "136 km²",
        link: "#resita"
    }
];

const tablazatTbody = document.querySelector('#varosok-tablazat tbody');
const loadMoreButton = document.getElementById('load-more');


const initialCities = 5;
let visibleCities = initialCities; 
let isAllCitiesLoaded = false; 


function loadCities(count) {

    for (let i = 0; i < count; i++) {
        const varos = varosok[i];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${varos.rang}</td>
            <td><a href="${varos.link}" id="tablazatLink">${varos.varos}</a></td>
            <td>${varos.megye}</td>
            <td>${varos.lakossag} fő</td>
            <td>${varos.terulet}</td>
        `;
        tablazatTbody.appendChild(row);
    }
}


loadCities(visibleCities);


loadMoreButton.addEventListener('click', () => {
    if (!isAllCitiesLoaded) {
        visibleCities += 20;  

        loadCities(visibleCities > varosok.length ? varosok.length - visibleCities : 20);

        if (visibleCities >= varosok.length) {
            loadMoreButton.textContent = 'Táblázat összecsukása';
            isAllCitiesLoaded = true;
        }
    } else {

        tablazatTbody.innerHTML = '';  
        visibleCities = initialCities;  
        loadCities(visibleCities);  
        loadMoreButton.textContent = 'További városok betöltése';  
        isAllCitiesLoaded = false; 
    }
});
