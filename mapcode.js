var map = L.map('map').setView([35.2, -97.5], 5);
		    
		    //Map Base Tiles
			var lightbase = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
							type: 'map',
							ext: 'jpg',
							attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
							subdomains: '1234'
							}).addTo(map);
		    
		    var darkbase = L.tileLayer('http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png', {
	                        attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                            });
		        			
            var night1 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	                        attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	                        bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	                        minZoom: 1,
	                        maxZoom: 8,
	                        format: 'jpg',
	                        time: '',
	                        tilematrixset: 'GoogleMapsCompatible_Level'
                            });
		        			
			var satellite1 = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
							type: 'sat',
							ext: 'jpg',
							attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
							subdomains: '1234'
							});

			var roads = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	                        type: 'hyb',
	                        ext: 'png',
	                        attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	                        subdomains: '1234',
	                        opacity: 0.9
                            });		     
		     
		    //Weather Tiles
		    //Radar 
			var radar = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", {
							layers: 'RAS_RIDGE_NEXRAD',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							attribution: "Weather data from NOAA/NOS nowCoast"
							}).addTo(map);
					   		  
			//Tornado Warnings	
			var tornadowarn = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", {
							layers: 'WARN_SHORT_TOR',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							attribution: "Weather data from NOAA/NOS nowCoast"
							}).addTo(map);
			
			//Extreme Wind Warnings	
			var windwarn = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", {
							layers: 'WARN_SHORT_EWW',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							attribution: "Weather data from NOAA/NOS nowCoast"
							}).addTo(map);
			
			//Severe Weather Warnings    
			var severewarn = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", {
							layers: 'WARN_SHORT_SVR',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							attribution: "Weather data from NOAA/NOS nowCoast"
							}).addTo(map);
			
			//Flood Warnings
			var floodwarn = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", {
							layers: 'WARN_SHORT_FLW',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							attribution: "Weather data from NOAA/NOS nowCoast"
							}).addTo(map);
							
			//Flash Flood Warnings	
			var flashfloodwarn = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/wwa", {
							layers: 'WARN_SHORT_FFW',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							attribution: "Weather data from NOAA/NOS nowCoast"
							}).addTo(map);
			
			//Clouds	
			var clouds = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", {
							layers: 'RAS_GOES_I4',
							format: 'image/png',
							transparent: true,
							opacity: 0.4,
							attribution: "Weather data from NOAA/NOS nowCoast"
							});
		    
		    //Temperature
			var temp1 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", {
							layers: 'OBS_MET_TEMP',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							attribution: "Weather data from NOAA/NOS nowCoast"
							}); 
		    
		    var temp2 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/analyses?service=wms&version=1.1.1", {
							layers: 'RTMA_RAS_AIRTEMP',
							format: 'image/png',
							transparent: true,
							opacity: 0.3,
							attribution: "Weather data from NOAA/NOS nowCoast"
							});	
								
		    var temp3 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/analyses?service=wms&version=1.1.1", {
							layers: 'RTMA_POLY_AIRTEMP',
							format: 'image/png',
							transparent: true,
							opacity: 0.3,
							attribution: "Weather data from NOAA/NOS nowCoast"
							});								
									        
		    //Wind speed and direction
		    var wind = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs", {
							layers: 'OBS_MET_WIND',
							format: 'image/png',
							transparent: true,
							attribution: "Weather data from NOAA/NOS nowCoast"
							});	
			
			var windvectors1 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/analyses?service=wms&version=1.1.1", {
							layers: 'RTMA_PT_WINDVECT_01',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							});	

			var windvectors5 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/analyses?service=wms&version=1.1.1", {
							layers: 'RTMA_PT_WINDVECT_05',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							});								

			var windvectors10 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/analyses?service=wms&version=1.1.1", {
							layers: 'RTMA_PT_WINDVECT_10', 
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							});
							
			var windvectors15 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/analyses?service=wms&version=1.1.1", { 
							layers: 'RTMA_PT_WINDVECT_15',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							});
								
			// Precipitation Analysis
			var precip1 = L.tileLayer.wms("http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/analyses?service=wms&version=1.1.1", { 
							layers: 'RTMA_RAS_QPE_1HR',
							format: 'image/png',
							transparent: true,
							opacity: 0.5,
							});

			// Legends 
			var radarlegend = L.control({position: 'bottomleft'});
			
			radarlegend.onAdd = function (map) {
    			var div = L.DomUtil.create('div', 'info legend');
        		div.innerHTML +=
        		'<img src="http://nowcoast.noaa.gov/LayerInfo?layer=RAS_RIDGE_NEXRAD&data=legend" alt="legend">';
    			return div;
   			 };
   			 radarlegend.addTo(map);

			var preciplegend = L.control({position: 'bottomleft'});
			
			preciplegend.onAdd = function (map) {
    			var div = L.DomUtil.create('div', 'info legend');
        		div.innerHTML +=
        		'<img src="http://nowcoast.noaa.gov/LayerInfo?layer=RTMA_RAS_QPE_1HR&data=legend" alt="legend">';
    			return div;
   			 };
   			 preciplegend.addTo(map);
			
			//Layer Groups
			var temps = L.layerGroup([temp1, temp2, temp3]);
			var windvectors = L.layerGroup([windvectors1, windvectors5, windvectors10, windvectors15]);		
			var satellite = L.layerGroup([satellite1, overlay]);			
			var nighttime = L.layerGroup([night1, overlay]);
            
            //Layer Control            
			var temps = L.layerGroup([temp1, temp2, temp3]);
			var windvectors = L.layerGroup([windvectors1, windvectors5, windvectors10, windvectors15]);		
            
            //Layer Control            
            var baseLayers = {
            	"Light Base" : lightbase,
            	"Dark Base" : darkbase,
            	"Satellite" : satellite1,
            	"Night Time" : night1
            	};
            	
            var overlays = {
            	"Clouds" : clouds,
            	"Radar" : radar,
            	"Temperatures" : temps,
            	"Tornado Warnings" : tornadowarn,
            	"Extreme Wind Warnings" : windwarn,
            	"Severe Thunderstorm Warnings" : severewarn,
            	"Flood Warnings" : floodwarn,
            	"Flash Flood Warnings" : flashfloodwarn,
            	"Wind Direction and Speed" : wind,
            	"Wind Vectors" : windvectors,
            	"1 Hour Precipitation Accumulation" : precip1,
            	"Alternate Labels" : roads
            	};
            
            L.control.layers(baseLayers, overlays).addTo(map);
		    
		    // Scale
			L.control.scale({position: 'topright'}).addTo(map);


// function MapResize() {
//    document.getElementById("map").style.height = "50vh";
//    document.getElementById("map").style.width = "100vw";
//    map.invalidateSize();
// }
