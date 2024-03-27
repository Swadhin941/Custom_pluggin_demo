<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body class="p-5" onload="onLoadOfPage()">
    <div class="container">
        <div class="d-flex justify-content-center mb-3">
            <div class="input-group" style="width: 60%;">
                <input type="text" class="form-control" name="searchField" id="searchField" style="border-right:0px;" placeholder="Search by product name">
                <span class="input-group-text bg-white" id="searchClick"><i class="bi bi-search"></i></span>
            </div>
            <div class="input-group " style="width:20%;">
                <select name="categoriesList" id="categoriesList" class="form-select d-none" value="default">
                    <option value="default" selected>---Select a category---</option>
                </select>
            </div>
        </div>
        <div class="row g-2" id="cardContainer">

        </div>
        <div class="row g-2 d-none" id="searchContainer">

        </div>
        <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-primary d-none" id="save">Save</button>
        </div>

    </div>
    <script src="./JS/test.js">


    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>