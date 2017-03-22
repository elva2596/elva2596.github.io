import {MeshBasicMaterial,MeshLambertMaterial,Vector3} from 'three';
import {FancyMaterialModule} from '../modules/FancyMaterialModule';
import {Plane} from '@whs+meshes'
import * as WHS from 'whs'
import {DirectionalLight} from '@whs+lights'
const plane = new Plane({
  geometry:{
    width:200,
    height:200
  },
  material:new MeshLambertMaterial({color:0xff0000}),
  position:[0,-2,0],
  rotation:[-Math.PI/2,0],
  modules:[
    new FancyMaterialModule(app)
  ]
})
const teapot = new WHS.Model({
  geometry: {
    path: "../build/utah-teapot-large.json",
    parser(...input) { // geometry, material for example. Depends on loader
      // ...
       return new THREE.Mesh(); // if `undefined` - then something wrong with path/loader/file
      
      // debugger;
    }
  },

  material: new THREE.MeshLambertMaterial({
    vertexColors: THREE.VertexColors,
    shading: THREE.SmoothShading,
    side: THREE.DoubleSide
  }),
  modules: [
    new WHS.mesh.TextureModule({
      url: '../build/teapot.jpg'
    })
  ],
    
  useCustomMaterial: true, // Required if you want to force the use of material you provide
  pos: {
    x: 0,
    y: 100,
    z: 0
  },
  scale: {
    x: 4,
    y: 4,
    z: 4
  }
});
const light = new DirectionalLight({
    light: {
    color: 0xff0000
  },
  position: [10, 20, 10]
})
// console.log(teapot.params.parser);
export {planes,plane,teapot}