var myApp = angular.module('studentsList', []);

myApp.value('studentsList',[
    {
        title:"Beautiful Krakow",
        categories:["Trip", "Krakow"],
        description:`
        Krakow (Krakow region) is a city in Poland on the banks of the Vistula, 
        760 thousand inhabitants (2004), with the nearest suburbs 1.2 million. 
        The administrative center of Malopolska Voivodeship. The second largest city 
        in Poland after Warsaw; one of the oldest cities in Poland, with a thousand-year 
        history, rich cultural and architectural heritage. One of the centers of Galicia.
        European Capital of Culture 2000 The historic center of Krakow since 1978 is a 
        UNESCO World Heritage Site.`,
        photo:"../assets/krakow.jpg"
    }
    ,{
        title:"My trip to warszawa",
        categories:["Trip", "Warszawa"],
        description:`
        Warszawa (Warsaw Warszawa) is the capital of Poland since 1596, the port on 
        the Vistula River, the administrative center of Mazowieckie Voivodeship. The 
        city is the location of the central authorities of the Republic of Poland, 
        foreign missions, headquarters of a large number of enterprises and public 
        associations operating in Poland. Warsaw with a population of 1,735,442 (2014) 
        inhabitants is Poland's largest city and forms the second largest agglomeration 
        in the country (after Katowice).`,
        photo:"../assets/warsawa.jpg"
    }
]);