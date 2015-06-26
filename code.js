var contact =
'<html>
<body>
    <div class="container" id="content">
        <div class="row">
            <div class="col-md-11 col-centered">
                <h2 align="center">Contact</h2>
                <div class="col-md-3 col-sm-6" style="margin-bottom:15px">
                    <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span></br>
                    <a href="https://goo.gl/maps/yk0FQ" target="_blank">
                        401 West Brooks Street</br>
                        Bizzell Memorial Library, HCLC</br>
                        University of Oklahoma</br>
                        Norman, OK 73019
                    </a>
                </div>
                <div class="col-md-2 col-sm-6" style="margin-bottom:15px">
                    <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></br>
                    <a href="tel:405-325-2429">405.325.2429</a>
                </div>
                <div class="col-md-3 col-sm-6" style="margin-bottom:15px">
                    <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></br>
                    <a href="mailto:jladams@ou.edu">jladams@ou.edu</a>
                </div>
                <div class="col-md-4 col-sm-12">
                    <a href="images/house.png" data-lightbox="house" data-title="House"><img class="img-thumbnail" src="images/house.png"></a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>';

function contact() {
    document.getElementById('content').innerHTML = "contact";
}