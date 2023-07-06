//Coordenadas
	var data = [
		{"loc":[41.575330,13.102411], "title":"aquamarine"},
		{"loc":[41.575730,13.002411], "title":"black"},
		{"loc":[41.807149,13.162994], "title":"blue"},
		{"loc":[41.507149,13.172994], "title":"chocolate"},
		{"loc":[41.847149,14.132994], "title":"coral"},
		{"loc":[41.219190,13.062145], "title":"cyan"},
		{"loc":[41.344190,13.242145], "title":"darkblue"},	
		{"loc":[41.679190,13.122145], "title":"Darkred"},
		{"loc":[41.329190,13.192145], "title":"Darkgray"},
		{"loc":[41.379290,13.122545], "title":"dodgerblue"},
		{"loc":[41.409190,13.362145], "title":"gray"},
		{"loc":[41.794008,12.583884], "title":"green"},	
		{"loc":[41.805008,12.982884], "title":"greenyellow"},
		{"loc":[41.536175,13.273590], "title":"red"},
		{"loc":[41.516175,13.373590], "title":"rosybrown"},
		{"loc":[41.506175,13.273590], "title":"royalblue"},
		{"loc":[41.836175,13.673590], "title":"salmon"},
		{"loc":[41.796175,13.570590], "title":"seagreen"},
		{"loc":[41.436175,13.573590], "title":"seashell"},
		{"loc":[41.336175,13.973590], "title":"silver"},
		{"loc":[41.236175,13.273590], "title":"skyblue"},
		{"loc":[41.546175,13.473590], "title":"yellow"},
		{"loc":[41.239190,13.032145], "title":"white"}
	];




//Inicializa o mapa
var map = L.map('map').setView([-6.81, -42.56], 6);

//Adiciona a camada
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Teste
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);

//------------------------------------------------------------

//MARCADOR CAPIC
var marker_capic = L.marker([-7.07, -41.40]).addTo(map);
// POPUPS CAPIC
marker_capic.bindPopup("<b>IFPI - Campus Picos!</b>").openPopup();


//MARCADOR CASJP
var marker_casjp = L.marker([-8.36, -42.25]).addTo(map);
// POPUP CASJP
marker_casjp.bindPopup("<b>IFPI - Campus São João Do Piuí!</b>").openPopup();

//MARCADOR CASRN
var marker_casrn = L.marker([-9.04, -42.69]).addTo(map);
// POPUP CASRN
marker_casrn.bindPopup("<b>IFPI - Campus São Raimundo Nonato!</b>").openPopup();

// Marcador CATCE
var marker_catce = L.marker([-5.0888332, -42.8114572,21]).addTo(map);
// POPUP CATCE
marker_catce.bindPopup("<b>IFPI - Campus Teresina Central!</b>").openPopup();

//MARCADOR CATZS
var marker_catzs = L.marker([-5.1022343, -42.8156814]).addTo(map);
// POPUP CATZS
marker_catzs.bindPopup("<b>IFPI - Campus Teresina Zona Sul!</b>").openPopup();

//MARCADOR CAURU
var marker_cauru = L.marker([-7.27, -44.51]).addTo(map);
// POPUP CAURU
marker_cauru.bindPopup("<b>IFPI -Campus Uruçuí!</b>").openPopup();

// MARCADOR CAVAL
var marker_caval = L.marker([-6.42, -41.75]).addTo(map);
// POPUP CAVAL
marker_caval.bindPopup("<b>IFPI - Campus Valença!</b>").openPopup();


//Marcador CACOR
var marker_cacor = L.marker([-10.430338, -45.173491]).addTo(map);
//Poupup CACOR
marker_cacor.bindPopup("<b>IFPI - Campus Corrente</b>").openPopup();

//Marcador CAFLO
var marker_caflo = L.marker([-6.7886826, -43.0441517]).addTo(map);
//Poupup CAFLO
marker_caflo.bindPopup("<b>IFPI - Campus Floriano</b>").openPopup();

//Marcador CAANG
var marker_caang = L.marker([-6.083790610555792, -42.73360576101853]).addTo(map);
//Poupup CAANG
marker_caang.bindPopup("<b>IFPI - Campus Angical </b>").openPopup();

//Marcador CACAM
var marker_cacam = L.marker([-4.8644078, -42.14710921921]).addTo(map);
//Poupup CACAM
marker_cacam.bindPopup("<b>IFPI - Campus Campo Maior</b>").openPopup();

//Marcador CACOC
var marker_cacoc = L.marker([-3.4622422, -41.58339221]).addTo(map);
//Poupup CACOC
 marker_cacoc.bindPopup("<b>IFPI - Campus Cocal</b>").openPopup();

//Marcador CADIR
var marker_cadir = L.marker([-5.0995454, -42.7389652, 21]).addTo(map);
//Poupup CADIR
 marker_cadir.bindPopup("<b>IFPI - Campus Dirceu</b>").openPopup();

//Marcador CAJFR
var marker_cajfr = L.marker([-4.7651419, -42.6108094, 21]).addTo(map);
//Poupup CAJFR
 marker_cajfr.bindPopup("<b>IFPI - Campus José De Freitas</b>").openPopup();

//Marcador CAOEI
var marker_caoei = L.marker([-6.9991643, -42.1013343,21]).addTo(map);
//Poupup CAOEI
 marker_caoei.bindPopup("<b>IFPI - Campus Oeiras</b>").openPopup();

//Marcador CAPAR
var marker_capar = L.marker([-2.9468597, -41.7402111]).addTo(map);
//Poupup CAPAR
 marker_capar.bindPopup("<b>IFPI - Campus Parnaíba</b>").openPopup();

//Marcador CAPAU
var marker_capau = L.marker([-8.0947612,-41.1674786]).addTo(map);
//Poupup CAPAU
 marker_capau.bindPopup("<b>IFPI - Campus Paulistana </b>").openPopup();

//Marcador CAPIR
var marker_capir = L.marker([-4.289696718981491, -41.793708155604385]).addTo(map);
//Popup CAPIR
marker_capir.bindPopup("<b>IFPI - Campus Piripiri</b>").openPopup();

//Marcador CAPIX
var marker_capix = L.marker([-6.85301,-40.6176136]).addTo(map);
//Popup CAPIX
marker_capix.bindPopup("<b>IFPI - Campus Pio IX</b>").openPopup();

//Marcador CAPEDII
var marker_capedii = L.marker([-4.448095137289841, -41.457342574590676]).addTo(map);
//Popup CAPEDII
marker_capedii.bindPopup("<b>IFPI - Campus Pedro II</b>").openPopup();