const getAllUpdatedCategory= (data, readyToPush)=>{
    console.log(JSON.parse(data), readyToPush);
}


const makeCategoryList = (list) => {
    const firstSplit = list.split(`<Categories xmlns="http://com.etilize.spexlive">`);
    // console.log(firstSplit)
    const secondSplit = firstSplit[1]?.split(`</Categories>`)[0].trim();
    const thirdSplit = secondSplit?.split("name=");
    const fourthSplit = [];
    thirdSplit?.forEach(element => {
        if (element.includes("\n")) {
            fourthSplit.push(element?.split(`"/>\n`)[0].split(`"`)[1])
        }
    })

    return fourthSplit;
};


const makeMenuFactureList=(list)=>{
    console.log(list);
}

let readyToPush = [];
let searchesData = [];
let listOfAvailableCategory = new Set();
let selectedItemCategories = [];
let fetchedCategory = new Set();
let categoryListElement = document.getElementById('categoriesList');

const onLoadOfPage = () => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/api-tutorial/allCategories.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 || this.status === 200) {
            console.log(this.responseText);
            try {
                let tempCategory = JSON.parse(this.responseText);

                categoryListElement.classList.remove('d-none');

                document.getElementById('save').classList.remove("d-none");
                tempCategory.forEach(element => {
                    if (element.name !== 'Uncategorized') {
                        listOfAvailableCategory.add(element.name);
                    }
                })
            }
            catch (error) {
                console.log(error.message);
            }

        }
    };
    xmlhttp.send(null);

}

categoryListElement.addEventListener("click", () => {
    let tempArray = [...fetchedCategory];
    const selectedCategoryValue = categoryListElement.value;
    if (selectedCategoryValue !== 'default') {
        let filteredData = fetchData.filter((data) => {
            const findCategory = data.categories.find((element) => element.name === selectedCategoryValue);
            if (findCategory) {
                return true;
            }
            else {
                return false;
            }
        });
        cardContainer.innerHTML = ``;
        filteredData.forEach(element => {
            let column = document.createElement("div");
            column.classList.add("col-12");
            column.classList.add("col-sm-5");
            column.classList.add("col-md-4");
            column.classList.add("col-lg-3");
            column.setAttribute("id", "allCards");
            column.innerHTML = `
                <div class="card">
                    <div style="position:relative;">
                        <div style="position:absolute;right:5px;top:-2px;">
                            <input type="checkbox" class="form-check-input" onclick="selectedItem('${element._id}')">
                        </div>
                    </div>
                    <div style="height:200px; width:auto;">
                        <img src="${element.images[0].src}" alt="" style="height:100%;width:100%;">
                    </div>
                    <div class="card-body">
                        <h5>${element.name}</h5>
                        <div>
                            <button class="btn btn-primary w-100">${element.regular_price}</button>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.appendChild(column);
        })
    }
    else {
        cardContainer.innerHTML = ``;
        fetchData.forEach(element => {
            let column = document.createElement("div");
            column.classList.add("col-12");
            column.classList.add("col-sm-5");
            column.classList.add("col-md-4");
            column.classList.add("col-lg-3");
            column.setAttribute("id", "allCards");
            column.innerHTML = `
                <div class="card">
                    <div style="position:relative;">
                        <div style="position:absolute;right:5px;top:-2px;">
                            <input type="checkbox" class="form-check-input" onclick="selectedItem('${element._id}')">
                        </div>
                    </div>
                    <div style="height:200px; width:auto;">
                        <img src="${element.images[0].src}" alt="" style="height:100%;width:100%;">
                    </div>
                    <div class="card-body">
                        <h5>${element.name}</h5>
                        <div>
                            <button class="btn btn-primary w-100">${element.regular_price}</button>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.appendChild(column);
        })
    }
    // categoryListElement.innerHTML = `<option value="default" selected>---Select a category---</option>
    // `;
    let tempStoreCategory = [];
    for (let i = 1; i < categoryListElement.children.length; i += 1) {
        tempStoreCategory.push(`${categoryListElement.children[i].value}`);
    }

    tempArray.forEach(element => {
        const isAvailable = tempStoreCategory.find(data => element === data);
        if (!isAvailable) {
            let optionElement = document.createElement("option");
            optionElement.textContent = element;
            optionElement.setAttribute("value", element);
            categoryListElement.appendChild(optionElement);
        }
    })

})


//Search results works here
document.getElementById("searchClick").addEventListener("click", () => {
    const searchText = document.getElementById("searchField").value.toLowerCase().trim();
    searchesData = fetchData.filter(data => data.name.toLowerCase() === searchText);
    let searchContainer = document.getElementById("searchContainer");
    let searchCards = document.getElementsByClassName(".searchCards");
    if (searchCards) {
        searchContainer.innerHTML = '';
    }
    if (searchText.length > 0) {
        cardContainer.classList.add("d-none");
        searchContainer.classList.remove("d-none");
        searchesData.forEach(element => {
            let column = document.createElement("div");
            column.classList.add("col-12");
            column.classList.add("col-sm-5");
            column.classList.add("col-md-4");
            column.classList.add("col-lg-3");
            column.classList.add("searchCards");
            column.innerHTML = `
                <div class="card">
                    <div style="position:relative;">
                        <div style="position:absolute;right:5px;top:-2px;">
                            <input type="checkbox" class="form-check-input" onclick="selectedItem('${element._id}')">
                        </div>
                    </div>
                    <div style="height:200px; width:auto;">
                        <img src="${element.images[0].src}" alt="" style="height:100%;width:100%;">
                    </div>
                    <div class="card-body">
                        <h5>${element.name}</h5>
                        <div>
                            <button class="btn btn-primary w-100">${element.regular_price}</button>
                        </div>
                    </div>
                </div>
            `;
            searchContainer.appendChild(column);
        })
    } else {
        cardContainer.classList.remove("d-none");
    }
})


let finalCategoryPush = [];

if (readyToPush.length === 0) {
    document.getElementById("save").setAttribute("disabled", true);
}
document.getElementById("save").addEventListener("click", () => {
    //console.log([...fetchedCategory]);
    // console.log(readyToPush);
    let selectedItemCategories = new Set();
    readyToPush.forEach((element) => {
        element.categories.forEach((category) => {
            if (category?.name) {
                selectedItemCategories.add(category.name);
            }
        })
    })
    // console.log(selectedItemCategories);
    finalCategoryPush = [...selectedItemCategories];
    // console.log(finalCategoryPush);
    let tempListOfAvailableCategory = [...listOfAvailableCategory];
    // console.log(tempListOfAvailableCategory);
    tempListOfAvailableCategory.forEach(element => {
        finalCategoryPush = finalCategoryPush.filter(data => data !== element);
    });
    // console.log(finalCategoryPush);
    const categoryToPush = [];
    finalCategoryPush.forEach((element, index) => {
        const temp = {
            name: element
        };
        // console.log(temp);
        categoryToPush.push(temp);
    });
    // console.log(categoryToPush);
    // temp.forEach(element=>{
    //     const findCategory = tempListOfAvailableCategory.find(data=> data !== element);
    //     console.log(findCategory);
    // })
    // console.log(finalCategoryPush);
    // console.log(readyToPush);
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "/api-tutorial/updateCategory.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 || this.status === 200) {
            try {
                console.log(this.responseText);
                getAllUpdatedCategory(this.responseText, readyToPush);
                // const categoryList = makeCategoryList(this.responseText);
                // console.log(categoryList);
                // console.log(makeMenuFactureList(this.responseText));
                // if(!this.responseText.toLocaleLowerCase().includes("manufacturers")){

                // }
                // else{
                //     console.log("text", this.responseText);
                // }
            }
            catch (error) {
                console.log(error.message)
            }
            // try{
            //     console.log(JSON.parse(this.responseText));
            // }
            // catch(error){
            //     console.log(error.message)
            // }
            // if (this.responseText === 'Updated successfully') {
            //     alert('Updated successfully');
            //     window.location.href = "http://localhost/api-tutorial/"
            // }
        }
    };
    xmlhttp.send("categories=" + JSON.stringify(categoryToPush));
    // window.location.href="/api-tutorial/test3.php";
})

const selectedItem = (item) => {
    let tempSelection = JSON.parse(localStorage.getItem("test_data"));

    const findItem = readyToPush.find(data => data._id === item);
    if (findItem) {
        const tempValues = readyToPush.filter(data => data._id !== item);
        if (readyToPush.length === 1) {
            document.getElementById("save").setAttribute("disabled", true);
        }
        readyToPush = tempValues;
        // setMarked();
    } else {
        const tempValue = tempSelection.find(data => data._id === item)
        if (readyToPush.length === 0) {
            document.getElementById("save").removeAttribute("disabled");
        }
        readyToPush.push(tempValue);
        // setMarked();
    }


    // let temp = [...fetchData];
    // temp = temp.filter(data=>data._id!== item);
    // fetchData= [...temp];
}
// console.log(JSON.parse(localStorage.getItem("test_data")));
let fetchData = JSON.parse(localStorage.getItem("test_data"));


// if(fetchData===null){
//     window.location.href= "http://localhost/api-tutorial/test2.php";
// }
let cardContainer = document.getElementById("cardContainer");
fetchData.forEach((element) => {
    element.categories.forEach((category) => {
        if (category?.name) {
            fetchedCategory.add(category?.name);
        }
    })
    let column = document.createElement("div");
    column.classList.add("col-12");
    column.classList.add("col-sm-5");
    column.classList.add("col-md-4");
    column.classList.add("col-lg-3");
    column.setAttribute("id", "allCards");
    column.innerHTML = `
                <div class="card">
                    <div style="position:relative;">
                        <div style="position:absolute;right:5px;top:-2px;">
                            <input type="checkbox" class="form-check-input" onclick="selectedItem('${element._id}')">
                        </div>
                    </div>
                    <div style="height:200px; width:auto;">
                        <img src="${element.images[0].src}" alt="" style="height:100%;width:100%;">
                    </div>
                    <div class="card-body">
                        <h5>${element.name}</h5>
                        <div>
                            <button class="btn btn-primary w-100">${element.regular_price}</button>
                        </div>
                    </div>
                </div>
            `;
    cardContainer.appendChild(column);
})