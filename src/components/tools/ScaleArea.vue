<template>
    <div style="marginLeft: 8px">
        <el-button size="mini" plain @click="onScale">测量面积</el-button>
    </div>
</template>

<script>
import * as maptalks from 'maptalks'
import { mapState } from 'vuex'
export default {
    name: 'scale-area',
    data() {
        return {
            areaTool: {},
        }
    },
    computed: {
        ...mapState({
            map: ({ baseMap }) => baseMap.map,
        }),
    },
    methods: {
        initarea() {
            this.areaTool = new maptalks.AreaTool({
                symbol: {
                    lineColor: '#1bbc9b',
                    lineWidth: 2,
                    polygonFill: '#FFA500',
                    polygonOpacity: 0.3,
                },
                vertexSymbol: {
                    markerType: 'ellipse',
                    markerFill: '#34495e',
                    markerLineColor: '#1bbc9b',
                    markerLineWidth: 3,
                    markerWidth: 10,
                    markerHeight: 10,
                },
                labelOptions: {
                    textSymbol: {
                        textFaceName: 'monospace',
                        textFill: '#F0E68C',
                        textLineSpacing: 1,
                        textHorizontalAlignment: 'right',
                        textDx: 15,
                    },
                    boxStyle: {
                        padding: [6, 2],
                        symbol: {
                            markerType: 'square',
                            markerFill: '#000',
                            markerFillOpacity: 0.9,
                            markerLineColor: '#b4b3b3',
                        },
                    },
                },
                clearButtonSymbol: [
                    {
                        markerType: 'square',
                        markerFill: '#000',
                        markerLineColor: '#b4b3b3',
                        markerLineWidth: 2,
                        markerWidth: 15,
                        markerHeight: 15,
                        markerDx: 22,
                    },
                    {
                        markerType: 'x',
                        markerWidth: 10,
                        markerHeight: 10,
                        markerLineColor: '#fff',
                        markerDx: 22,
                    },
                ],
                language: 'en-US',
            })
        },
        onScale() {
            this.areaTool.on('drawend', () => {
                this.areaTool.disable()
            })
            this.areaTool.addTo(this.map)
        },
    },
    mounted() {
        this.initarea()
    },
}
</script>
