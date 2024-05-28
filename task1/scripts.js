var photos = {}; 
        photos["bind"] = new Image(400, 300);
        photos["bind"].src = "bind.jpg";
        photos["pearl"] = new Image(400, 300);
        photos["pearl"].src = "pearl.jpg";
        photos["lotus"] = new Image(400, 300);
        photos["lotus"].src = "lotus.jpg";

        function displayPhoto(select) {
            var selectedPhoto = select.options[select.selectedIndex].value;
            var photoElement = document.getElementById("photo");
            photoElement.src = photos[selectedPhoto].src;
            photoElement.alt = selectedPhoto; 
        }