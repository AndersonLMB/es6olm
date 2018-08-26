import 'ol/ol.css';
import { Map as Map, View } from 'ol';
import { Point } from "ol/geom";
import proj4 from "proj4";

import { MapStatus } from "./widgets/MapStatus";
import { MapComponent } from "./widgets/MapComponent";

import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from "ol/source/XYZ";

import { register } from "ol/proj/proj4";
var me = document.getElementById("map");

proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs");
register(proj4);


var mapStatus = new MapStatus();
var mapComponent = new MapComponent();


var map = new MapComponent(me);

// const map = new Map({
//     target: me,
//     layers: [
//         new TileLayer({
//             source: new XYZ({
//                 url: "http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}",

//             })
//         })
//     ],
//     view: new View({
//         extent: [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
//         center: [0, 0],
//         zoom: 1,
//         minZoom: 1
//     })
// });
var mm = new window.Map()

window.app = {};
var app = window.app;
app.mc = mapComponent;
app.ms = mapStatus;
app.mm = mm;
app.proj4 = proj4;
