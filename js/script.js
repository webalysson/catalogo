//Inicializa o mapa
var map = L.map('map').setView([-6.81, -42.56], 6);

//Adiciona a camada
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Search
var markersLayer = new L.LayerGroup();	//layer contain searched elements
map.addLayer(markersLayer);
var controlSearch = new L.Control.Search({
	position: 'topright',
	layer: markersLayer,
	initial: false,
	zoom: 12,
	marker: false
});
map.addControl(controlSearch);


//Teste para obter coordenadas
/*
function onMapClick(e) {
		alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick); */


// Estilização das áreas selecionadas
var featureStyle = {
	"color": "green",
	"weight": 3,
	"opacity": 0.2
};

//Adiciona a malha geográfica das cidades dos campus
L.geoJson(pi_municipios_ifpi, {
	style: featureStyle
}).addTo(map);


//Função para ler o arquivo com os cursos por campus
function dados_cursos(campus) {
	let div_cursos = document.getElementById("cursos");
	let nomes_cursos = '<img src="img/logo_ifpi_transp.png" width="340" height="100">';
	nomes_cursos += `<h4>${campus}</h4><p><b>Cursos Técnicos:</b></p>`;
	nomes_cursos += '<ul>'
	// cursos técnicos
	d3.csv("dados/dados_cursos_tecnicos.csv", (d) => {
		if (d.campus == campus) {
			nomes_cursos += '<li>' + d.curso + ' - ' + d.forma + '</li><br>';
		}
	}).then(function(data) {
		for (let i = 0; i < data.length; i++) {
			`${data[i].curso}`;
			`${data[i].forma}`;
		}
		nomes_cursos += '</ul>'
		nomes_cursos += '<p><b>Cursos Superiores:</b></p>'
		nomes_cursos += '<ul>'
	});
	//cursos superiores
	d3.csv("dados/dados_cursos_superiores.csv", (d) => {
		if (d.campus == campus) {
			nomes_cursos += '<li>' + d.curso + ' - ' + d.grau + '</li><br>';
		}
	}).then(function(data) {
		nomes_cursos += '</ul>'
		div_cursos.innerHTML = nomes_cursos;
	});

}


//---------------------------------------------------------
// INSERÇÃO DOS MARCADORES COM A LOCALIZAÇÃO DE CADA CAMPUS
//---------------------------------------------------------

//MARCADOR CASJP
var marker_casjp = L.marker([-8.36, -42.25], { title: 'São João Do Piauí' }).addTo(map);
marker_casjp.bindPopup(`<a href="javascript: dados_cursos('São João Do Piauí')"><img src='img/topo_ifpi_sao_joao.png' class="ifpi"><br><b>IFPI - Campus São João Do Piauí!</b></a>`).openPopup();
markersLayer.addLayer(marker_casjp);

//MARCADOR CASRN
var marker_casrn = L.marker([-9.04, -42.69], { title: 'São Raimundo Nonato' }).addTo(map);
marker_casrn.bindPopup(`<a href="javascript: dados_cursos('São Raimundo Nonato')"><img src='img/topo_ifpi_sao_raimundo_nonato.png' class="ifpi"><br><b>IFPI - Campus São Raimundo Nonato!</b></a>`).openPopup();
markersLayer.addLayer(marker_casrn);

// Marcador CATCE
var marker_catce = L.marker([-5.0888332, -42.8114572, 21], { title: 'Teresina Central' }).addTo(map);
marker_catce.bindPopup(`<a href="javascript: dados_cursos('Teresina Central')"><img src='img/topo_ifpi_teresina_central.png' class="ifpi"><br><b>IFPI - Campus Teresina Central!</b></a>`).openPopup();
markersLayer.addLayer(marker_catce);

//MARCADOR CATZS
var marker_catzs = L.marker([-5.1022343, -42.8156814], { title: 'Teresina Zona Sul' }).addTo(map);
marker_catzs.bindPopup(`<a href="javascript: dados_cursos('Teresina Zona Sul')"><img src='img/topo_ifpi_teresina_zona_sul.png' class="ifpi"><br><b>IFPI - Campus Teresina Zona Sul!</b></a>`).openPopup();

//MARCADOR CAURU
var marker_cauru = L.marker([-7.27, -44.51], { title: 'Uruçuí' }).addTo(map);
marker_cauru.bindPopup(`<a href="javascript: dados_cursos('Uruçuí')"><img src='img/topo_ifpi_urucui.png' class="ifpi"><br><b>IFPI -Campus Uruçuí!</b></a>`).openPopup();

// MARCADOR CAVAL
var marker_caval = L.marker([-6.42, -41.75], { title: 'Valença' }).addTo(map);
marker_caval.bindPopup(`<a href="javascript: dados_cursos('Valença')"><img src='img/topo_ifpi_valenca.png' class="ifpi"><br><b>IFPI - Campus Valença!</b></a>`).openPopup();


//Marcador CACOR
var marker_cacor = L.marker([-10.430338, -45.173491], { title: 'Corrente' }).addTo(map);
marker_cacor.bindPopup(`<a href="javascript: dados_cursos('Corrente')"><img src='img/topo_ifpi_corrente.png' class="ifpi"><br><b>IFPI - Campus Corrente</b></a>`).openPopup();

//Marcador CAFLO
var marker_caflo = L.marker([-6.7886826, -43.0441517], { title: 'Floriano' }).addTo(map);
marker_caflo.bindPopup(`<a href="javascript: dados_cursos('Floriano')"><img src="img/topo_ifpi_floriano.png" class="ifpi"><br><b>IFPI - Campus Floriano</b></a>`).openPopup();

//Marcador CAANG
var marker_caang = L.marker([-6.0838621, -42.7355654], { title: 'Angical' }).addTo(map);
marker_caang.bindPopup(`<a href="javascript: dados_cursos('Angical')"><img src="img/copy2_of_topo_ifpi_angical.png" class="ifpi"><br><b>IFPI - Campus Angical </b></a>`).openPopup();

//Marcador CACAM
var marker_cacam = L.marker([-4.8644078, -42.14710921921], { title: 'Campo Maior' }).addTo(map);
marker_cacam.bindPopup(`<a href="javascript: dados_cursos('Campo Maior')"><img src='img/topo_ifpi_campomaior.png' class="ifpi"><br><b>IFPI - Campus Campo Maior</b></a>`).openPopup();

//Marcador CACOC
var marker_cacoc = L.marker([-3.4622422, -41.58339221], { title: 'Cocal' }).addTo(map);
marker_cacoc.bindPopup(`<a href="javascript: dados_cursos('Cocal')"><img src='img/topo_ifpi_cocal.png' class="ifpi"><br><b>IFPI - Campus Cocal</b></a>`).openPopup();

//Marcador CADIR
var marker_cadir = L.marker([-5.0995454, -42.7389652, 21], { title: 'Dirceu' }).addTo(map);
marker_cadir.bindPopup(`<a href="javascript: dados_cursos('Dirceu')"><img src='img/topo_ifpi_dirceu.png' class="ifpi"><br><b>IFPI - Campus Dirceu</b></a>`).openPopup();

//Marcador CAJFR
var marker_cajfr = L.marker([-4.7651419, -42.6108094, 21], { title: 'José de Freitas' }).addTo(map);
marker_cajfr.bindPopup(`<a href="javascript: dados_cursos('José de Freitas')"><img src='img/topo_ifpi_jose_freitas.png' class="ifpi"><br><b>IFPI - Campus José De Freitas</b></a>`).openPopup();

//Marcador CAOEI
var marker_caoei = L.marker([-6.9991643, -42.1013343, 21], { title: 'Oeiras' }).addTo(map);
marker_caoei.bindPopup(`<a href="javascript: dados_cursos('Oeiras')"><img src='img/topo_ifpi_oeiras.png' class="ifpi"><br><b>IFPI - Campus Oeiras</b></a>`).openPopup();

//Marcador CAPAR
var marker_capar = L.marker([-2.9468597, -41.7402111], { title: 'Parnaíba' }).addTo(map);
marker_capar.bindPopup(`<a href="javascript: dados_cursos('Parnaíba')"><img src='img/topo_ifpi_parnaiba.png' class="ifpi"><br><b>IFPI - Campus Parnaíba</b></a>`).openPopup();

//Marcador CAPAU
var marker_capau = L.marker([-8.0947612, -41.1674786], { title: 'Paulistana' }).addTo(map);
marker_capau.bindPopup(`<a href="javascript: dados_cursos('Paulistana')"><img src='img/topo_ifpi_paulista.png' class="ifpi"><br><b>IFPI - Campus Paulistana </b></a>`).openPopup();

//Marcador CAPIR
var marker_capir = L.marker([-4.289696718981491, -41.793708155604385], { title: 'Piripiri' }).addTo(map);
marker_capir.bindPopup(`<a href="javascript: dados_cursos('Piripiri')"><img src='img/topo_ifpi_piripiri.png' class="ifpi"><br><b>IFPI - Campus Piripiri</b></a>`).openPopup();

//Marcador CAPIX
var marker_capix = L.marker([-6.85301, -40.6176136], { title: 'Pio IX' }).addTo(map);
marker_capix.bindPopup(`<a href="javascript: dados_cursos('Pio IX')"><img src='img/topo_ifpi_pio_ix.png' class="ifpi"><br><b>IFPI - Campus Pio IX</b></a>`).openPopup();

//Marcador CAPEDII
var marker_capedii = L.marker([-4.448095137289841, -41.457342574590676], { title: 'Pedro II' }).addTo(map);
marker_capedii.bindPopup(`<a href="javascript: dados_cursos('Pedro II')"><img src='img/topo_ifpi_pedroii.png' class="ifpi"><br><b>IFPI - Campus Pedro II</b></a>`).openPopup();