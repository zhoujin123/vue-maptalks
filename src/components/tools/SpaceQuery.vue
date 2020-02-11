<template>
    <div>
        <el-button size="mini" plain @click="show = true">空间查询</el-button>
        <div v-show="show" class="space">
            <div @click="show = false">关闭</div>
            <div class="symbol">
                <span>选择绘图:</span>
                <span @click="addShape('point')">点</span>
                <span>线</span>
                <span>长方形</span>
                <span>多边形</span>
            </div>
        </div>
    </div>
</template>

<script>
import * as maptalks from 'maptalks'
import { mapState } from 'vuex'
export default {
    name: 'space-query',
    data() {
        return {
            show: false,
            drawTool: {},
            markerLayer: {},
        }
    },
    computed: {
        ...mapState({
            map: ({ baseMap }) => baseMap.map,
        }),
    },
    methods: {
        addShape(shape) {
            var markerLayer = new maptalks.VectorLayer('markers').addTo(this.map)
            this.map.on('click', e => {
                console.log(e.coordinate)
                new maptalks.Marker(e.coordinate).addTo(markerLayer)
                new maptalks.Circle(e.coordinate.add(0, 0), 500, {
                    symbol: {
                        lineColor: '#34495e',
                        lineWidth: 2,
                        polygonFill: '#1bbc9b',
                        polygonOpacity: 0.4
                    },
                }).addTo(markerLayer)
            })
            // this.drawTool.on('drawend', function (param) {
            //     console.log(11111)
            //     console.log(param.geometry);
            // });
            // this.drawTool.setMode(shape).enabled()
        },
    },
    mounted() {
        this.drawTool = new maptalks.DrawTool({
            mode: 'point',
        })
            .addTo(this.map)
            .disable()
    },
}
</script>

<style>
.space {
    position: absolute;
    /* border: 1px solid #000; */
    box-shadow: 0 2px 4px 0 rgba(53, 94, 182, 0.1);
    border-radius: 2px;
    background: #fff;
    margin-top: 8px;
    padding: 16px;
    font-size: 12px;
}
span:not(:first-child) {
    margin-left: 8px;
    cursor: pointer;
}
</style>
