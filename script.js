const baseURL = "https://animal-service.onrender.com/"

const animal = ":cow";

const getSounds = async function(){
    try{
        const animalIDs = await fetch(`${baseURL}/animal/${animal}`)
        const animalIDsJSON = await animalIDs.json();

        console.log(animalIDsJSON);

        Object.keys(animalIDsJSON).forEach(async (key, value) =>{
            try{

            } catch(error){
                console.log(error)
            }
        })

        // const animalh1 = document.getElementById("animalIDs");
        // animalh1.innerHTML = animalIDsJSON;

    }catch(error){
        console.log(error);
    }
}

getSounds();