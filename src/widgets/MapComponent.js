import { Map as OlMap, View } from "ol";
import TileLayer from 'ol/layer/Tile';
import XYZ from "ol/source/XYZ";

class MapComponent {
    constructor(target, options) {
        this.olMap = new OlMap({
            target: target,
            view: new View({
                projection: "EPSG:3857",
                extent: [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
                center: [0, 0],
                zoom: 1,
                minZoom: 1
            })
        });
        this._addLayer(new TileLayer({
            source: new XYZ({
                url: "http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"
            })
        }));
        this._addLayer(new TileLayer({
            source: new XYZ({
                url: "http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}"
            })
        }));
    }
    _addLayer(layer) {
        this.olMap.addLayer(layer);
    }
}

export { MapComponent };




