/*
 * @Author: Zhou Jin 
 * @Date: 2020-01-10 14:51:06 
 * @Last Modified by: Zhou Jin
 * @Last Modified time: 2020-01-10 17:41:59
 * 基础底图 
 */

<template>
  <div id="map" class="container"></div>
</template>

<script>
import 'maptalks/dist/maptalks.css'
import * as maptalks from 'maptalks'
import { mapMutations } from 'vuex'
export default {
    name: 'baseMap',
    data(){
        return {
            map: {}
        }
    },
    methods: {
        ...mapMutations({
            changeMap: "baseMap/changeMap"
        }),
        renderMap(){
            this.$nextTick(() => {
                var map = new maptalks.Map('map',{
                      center: [-0.21322, 51.32442],
                      zoom: 14,
                      baseLayer: new maptalks.TileLayer('base', {
                        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                        subdomains: ['a','b','c','d'],
                        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                      }),
                      layers: [
                        new maptalks.VectorLayer('v')
                      ]
                })
                this.changeMap(map)
            })
        }
    },
    mounted(){
        this.renderMap()
    }
}
</script>