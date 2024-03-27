<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Take input</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>

</head>
<body onload= "loadEvent()">
    <div id="contentOfApi">
        
    </div>
    
    <script src="./JS/index.js">
        // const loadEvent= ()=>{
        //     localStorage.removeItem("test_data");
        // }
        // let changeState = false;
        // let fetchData = [];
        // let contentOfApi= document.getElementById("contentOfApi");
        // // console.log(contentOfApi)
        // let div= document.createElement("div");
        // div.classList.add("d-flex");
        // div.classList.add("justify-content-center");
        // div.classList.add("align-items-center");
        // div.style.height="100vh";
        // div.innerHTML= `
        // <div class="card w-25 p-3">
        //         <form id="apiForm" class="form">
        //             <div>
        //                 <label for="apiField" class="form-label">Api link:</label>
        //                 <div class="input-group">
        //                     <input type="text" class="form-control" name="apiField" id="apiField" placeholder="Enter your api link here" required>
        //                 </div>
        //             </div>
                    
        //             <div class="d-flex justify-content-center mt-2">
        //                 <button type="submit" class="btn btn-primary">Submit</button>
        //             </div>
        //         </form>
        //     </div>

        // `;
        // contentOfApi.appendChild(div);
        // document.getElementById("apiForm").addEventListener("submit", async(e)=>{
        //     e.preventDefault();
        //     let url = e.target.apiField.value;
        //     // fetch(url)
        //     // .then(res=>res.json())
        //     // .then(data=>{
        //     //     fetchData= [...data]
        //     // })
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     // fetchData.push(data);
        //     localStorage.setItem("test_data", JSON.stringify(data));
        //     window.location.href= "http://localhost/api-tutorial/test.php";
        // })
        // console.log(fetchData);
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>