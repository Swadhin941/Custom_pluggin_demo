const loadEvent = () => {
    localStorage.removeItem("test_data");
}
let changeState = false;
let fetchData = [];
let contentOfApi = document.getElementById("contentOfApi");
let div = document.createElement("div");
div.classList.add("d-flex");
div.classList.add("justify-content-center");
div.classList.add("align-items-center");
div.style.height = "100vh";
div.innerHTML = `
        <div class="card w-25 p-3">
                <form id="apiForm" class="form">
                    <div>
                        <label for="apiField" class="form-label">Api link:</label>
                        <div class="input-group">
                            <input type="text" class="form-control" name="apiField" id="apiField" placeholder="Enter your api link here" required>
                        </div>
                    </div>
                    
                    <div class="d-flex justify-content-center mt-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        `;
contentOfApi.appendChild(div);
document.getElementById("apiForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    let url = e.target.apiField.value;
    const res = await fetch(url);
    const data = await res.json();
    localStorage.setItem("test_data", JSON.stringify(data));
    window.location.href = "http://localhost/api-tutorial/test.php";
});