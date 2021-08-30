var str =localStorage.getItem("favourites");
var arr=str.split(",");
var favouriteCards=document.querySelector(".favouriteCards");
var html='';
var Favourites=[];
arr.forEach((i)=>{
    fetch(`https://superheroapi.com/api.php/896169844346580/${i}`)
    .then((apidata)=>
    {
        return apidata.json();
    }) 
    .then((apiobject)=>
    {
        console.log("apobject",apiobject);
        html+=`<div class="superhero-card" id="${apiobject.id}">
                    <div class="superhero-img">
                    <img src=${apiobject.image['url']} alt="${apiobject.name}">
                    </div>
                    <div class="superhero-information">
                        <h3 class="hero">${apiobject.name}</h3>
                        <h3 class="hero-id">${apiobject.id}</h3>
                        <div class="superhero-basicdetails">
                            <button class="details-button">Click for more Details</button>
                        </div>
                        <div class="unfavourite icon">
                        <i class="fas fa-heart favourite-icon"></i>
                        </div>
                    </div>           
                </div>`
        favouriteCards.innerHTML=html;


        const Card = document.querySelector('#card');
        console.log(Card);
        var hearts=Card.querySelectorAll('.fa-heart');
        hearts.forEach((heart)=>
        {
            console.log("heart",heart);
            heart.addEventListener('click',()=>{
                const HeartCard=heart.parentElement.parentElement.parentElement;
                const ID=HeartCard.getAttribute("id");

                if(heart.getAttribute("class")==="fas fa-heart unfavourite-icon")
                {
                    heart.style.color="rgb(223, 21, 21)";
                    heart.className="fas fa-heart favourite-icon";
                    Favourites.push(ID);
                    localStorage.setItem("favourites",Favourites);
                }
                else{

                    heart.style.color="white";
                    heart.className="fas fa-heart unfavourite-icon";
                    const Index=Favourites.indexOf(ID);
                    if(Index>-1)
                    {
                        Favourites.splice(Index,1);
                    }
                    localStorage.setItem("favourites",Favourites);
                }
            })
        })




        const detailsButton=document.querySelectorAll('.details-button');
        detailsButton.forEach((button)=>
        {
            button.addEventListener("click",()=>
            {
                buttonParent =button.parentElement;
                divParent=buttonParent.parentElement;
                const Id=divParent.getElementsByClassName('hero-id')[0].innerHTML;
                var html='';
                const details=fetch(`https://superheroapi.com/api.php/896169844346580/${Id}`)
                .then((apidata)=>
                {
                    return apidata.json();
                })
                .then((apiobject)=>
                {
                    var html=`
                        <div class="info-img">
                            <img src="${apiobject.image['url']}" alt="${apiobject['name']}">
                            <h2>${apiobject['name']}</h2>
                            <div class="close">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="info">
                            <table>
                                <thead>
                                    <tr class="heading-row">
                                        <th class="heading" colspan="2">PowerStatus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Intelligence</th>
                                        <td>${apiobject.powerstats["intelligence"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Strength</th>
                                        <td>${apiobject.powerstats["strength"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Speed</th>
                                        <td>${apiobject.powerstats["speed"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Durability</th>
                                        <td>${apiobject.powerstats["durability"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Power</th>
                                        <td>${apiobject.powerstats["power"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Combat</th>
                                        <td>${apiobject.powerstats["combat"]}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr class="heading-row">
                                        <th class="heading" colspan="2">Biography</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Full-Name</th>
                                        <td>${apiobject.biography["full-name"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Alter-egos</th>
                                        <td>${apiobject.biography["alter-egos"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Aliases</th>
                                        <td>${apiobject.biography["aliases"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Place-Of-Birth</th>
                                        <td>${apiobject.biography["place-of-birth"]}</td>
                                    </tr>
                                    <tr>
                                        <th>First-appearance</th>
                                        <td>${apiobject.biography["first-appearance"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Publisher</th>
                                        <td>${apiobject.biography["publisher"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Alignment</th>
                                        <td>${apiobject.biography["alignment"]}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr class="heading-row">
                                        <th class="heading" colspan="2">Appearance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Gender</th>
                                        <td>${apiobject.appearance["gender"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Race</th>
                                        <td>${apiobject.appearance["race"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Height</th>
                                        <td>${apiobject.appearance["height"][1]}</td>
                                    </tr>
                                    <tr>
                                        <th>Weight</th>
                                        <td>${apiobject.appearance["weight"][1]}</td>
                                    </tr>
                                    <tr>
                                        <th>Eye-color</th>
                                        <td>${apiobject.appearance["eye-color"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Hair-color</th>
                                        <td>${apiobject.appearance["hair-color"]}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr class="heading-row">
                                        <th class="heading" colspan="2">Work</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Occupation</th>
                                        <td>${apiobject.work["occupation"]}</td>
                                    </tr>
                                    <tr>
                                        <th>Base</th>
                                        <td>${apiobject.work["base"]}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr class="heading-row">
                                        <th class="heading" colspan="2">Connections</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Group-Affiliation</th>
                                        <td>${apiobject.connections['group-affiliation']}</td>
                                    </tr>
                                    <tr>
                                        <th>Relatives</th>
                                        <td>${apiobject.connections['relatives']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                        document.querySelector('.Detailed-info').innerHTML=html;

                        const closeButton=document.querySelector('.close');
                        console.log(closeButton)
                        closeButton.addEventListener('click',()=>{
                                document.querySelector('.Detailed-info').innerHTML="";
                            })
                        })
                    })
            
                })                
                    
    })
})