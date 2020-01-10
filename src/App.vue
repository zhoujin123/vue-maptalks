<template>
  <!-- <div id="map" class="container"></div> -->
  <div id="box" class="container"></div>
</template>

<script>
import 'maptalks/dist/maptalks.css'
import * as maptalks from 'maptalks'
import * as THREE from 'three'
// import OrbitControls from "three/examples/js/controls/OrbitControls"

export default {
  name: 'app',
  data(){
    return {
      map: {},
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      control: null,
      time0: new Date()
    }
  },
  methods: {
    addMarkers(){
      var center = this.map.getCenter()
      var m1 = new maptalks.Marker(center.add(-0.008, -0.008))
      var m2 = new maptalks.Marker(center.add(-0.008, -0.008))
      var m3 = new maptalks.Marker(center.add(-0.008, -0.008))
      var m4 = new maptalks.Marker(center.add(-0.008, -0.008))
      this.map.getLayer('v').addGeometry(m1, m2, m3, m4);
    },
    addBox(){
      var container = document.getElementById("box")
      // 创建场景对象
      this.scene = new THREE.Scene()
      // 创建网格模型
      var box = new THREE.BoxGeometry(100,100,100)
      var material = new THREE.MeshLambertMaterial({ color: 0x0000ff })   //材质对象
      this.mesh = new THREE.Mesh(box,material)   // 网格模型对象
      this.scene.add(this.mesh)

      // 创建光源对象
      var point = new THREE.PointLight(0xffffff)
      point.position.set(400,200,300)
      this.scene.add(point)

      // 环境光
      var ambient = new THREE.AmbientLight( 0x404040 )
      this.scene.add(ambient)

      // 相机设置
      var width = window.innerWidth
      var height = window.innerHeight
      var k = width / height 
      var s = 200

      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      this.camera.position.set(200,300,200)
      this.camera.lookAt(this.scene.position)

      // 创建渲染器对象
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(width, height)
      this.renderer.setClearColor(0xb9d3ff, 1)
      container.appendChild(this.renderer.domElement)

       // 控制器
      //  console.log(new THREE)
      // this.control = new THREE.OrbitControls(this.camera, this.renderer.domElement)
      // this.control.update()
      this.renderBox()
    },
    renderBox(){
      // let time1 = new Date()
      // console.log('时间间隔：', time1 - this.time0)
      // this.time0 = time1
      // this.control.update()
      this.mesh.rotateY(0.01)
      this.renderer.render(this.scene, this.camera)
      // requestAnimationFrame(this.renderBox)
    }
  },
  mounted(){
    this.addBox()
    this.$nextTick(() => {
      // var map = new maptalks.Map('map', {
      //   center: [-0.21322, 51.32442],
      //   zoom: 14,
      //   baseLayer: new maptalks.TileLayer('base', {
      //     urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      //     subdomains: ['a','b','c','d'],
      //     attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      //   }),
      //   layers: [
      //     new maptalks.VectorLayer('v')
      //   ]
      // })
      // this.map = map
      // this.addMarkers()
      // console.log(map)
      // console.log(this.$refs.map)
      // this.$refs.map = map
    })
  }
}

</script>

<style>
html,body {
  width: 100%;
  height: 100%;
}
.container{
  width: 100%;
  height: 100%;
}
</style>
