<template>
    <div class="distance">
        <el-button size="mini" plain @click="onScale">测距</el-button>
    </div>
</template>

<script>
import * as maptalks from 'maptalks'
import { mapState } from 'vuex'
export default {
    name: 'scale-length',
    data(){
        return {
            distanceTool: {},
        }
    },
    computed: {
        ...mapState({
            'map': ({baseMap}) => baseMap.map
        })
    },
    methods: {
        initSacle(){
            this.distanceTool = new maptalks.DistanceTool({
                'symbol': {
                    'lineColor': '#34495e',
                    'lineWidth': 2
                },
                'vertexSymbol': {
                    'markerType': 'ellipse',
                    'markerFill': '#1bbc96',
                    'markerLineColor': '#000',
                    'markerLineWidth'   : 3,
                    'markerWidth'       : 10,
                    'markerHeight'      : 10
                },
                'labelOptions': {
                    'textSymbol': {
                        'textFaceName': 'monospace',
                        'textFill' : '#fff',
                        'textLineSpacing': 1,
                        'textHorizontalAlignment': 'right',
                        'textDx': 15,
                        'markerLineColor': '#b4b3b3',
                        'markerFill' : '#000'
                    },
                    'boxStyle' : {
                    'padding' : [6, 2],
                        'symbol' : {
                        'markerType' : 'square',
                        'markerFill' : '#000',
                        'markerFillOpacity' : 0.9,
                        'markerLineColor' : '#b4b3b3'
                        }
                    }
                },
                'clearButtonSymbol' :[{
                    'markerType': 'square',
                    'markerFill': '#000',
                    'markerLineColor': '#b4b3b3',
                    'markerLineWidth': 2,
                    'markerWidth': 15,
                    'markerHeight': 15,
                    'markerDx': 20
                }, {
                    'markerType': 'x',
                    'markerWidth': 10,
                    'markerHeight': 10,
                    'markerLineColor' : '#fff',
                    'markerDx': 20
                }],
                'language' : 'en-US'
            })
        },
        onScale() {
            this.distanceTool.addTo(this.map)
        }
    },
    mounted(){
        this.initSacle()
    }
}
</script>

<style>
.distance {
    z-index: 999;
    position: absolute;
    top: 0;
    right: 16px
}
</style>