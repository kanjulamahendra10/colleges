var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_collegescla2colleges_1 = new ol.format.GeoJSON();
var features_collegescla2colleges_1 = format_collegescla2colleges_1.readFeatures(json_collegescla2colleges_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collegescla2colleges_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collegescla2colleges_1.addFeatures(features_collegescla2colleges_1);
var lyr_collegescla2colleges_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_collegescla2colleges_1, 
                style: style_collegescla2colleges_1,
                interactive: true,
                title: '<img src="styles/legend/collegescla2colleges_1.png" /> colleges cla2 — colleges'
            });
var format_collegescla2shp_2 = new ol.format.GeoJSON();
var features_collegescla2shp_2 = format_collegescla2shp_2.readFeatures(json_collegescla2shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collegescla2shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collegescla2shp_2.addFeatures(features_collegescla2shp_2);
var lyr_collegescla2shp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_collegescla2shp_2, 
                style: style_collegescla2shp_2,
                interactive: true,
                title: '<img src="styles/legend/collegescla2shp_2.png" /> collegescla2shp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_collegescla2colleges_1.setVisible(true);lyr_collegescla2shp_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_collegescla2colleges_1,lyr_collegescla2shp_2];
lyr_collegescla2colleges_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_collegescla2shp_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_collegescla2colleges_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_collegescla2shp_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_collegescla2colleges_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_collegescla2shp_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_collegescla2shp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});