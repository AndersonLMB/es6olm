import 'ol/ol.css';
import { Map, View } from 'ol';
import { Point } from "ol/geom";


import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

var me = document.getElementById("map");

const map = new Map({
    target: me,
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 0
    })
});


window.m = map;