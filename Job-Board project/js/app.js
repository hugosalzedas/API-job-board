async function getDescription() { 
    let url = 'http://localhost:8080/api/jobs/';
    try {
        let res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json; charset=utf-8'
            }
        });
     
        return await res.json();
    } catch (error) {
        console.log(error);
    }
 }
 async function renderDescription() {
    let descriptions = await getDescription();
    console.log(descriptions);
    let i = 0;
    let container = document.getElementsByClassName("container2"); 
    console.log(container);
    descriptions.forEach(description => {   
        let htmlSegment = `<div class="description">
                            <h6>${description.location_job}</h6>
                            <p>${description.description}</p>      
                            </div> `;
        
        container[i].innerHTML += htmlSegment;  

        i++

    });
}

renderDescription();
