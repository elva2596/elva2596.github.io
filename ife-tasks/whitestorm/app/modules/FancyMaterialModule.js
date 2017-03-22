import {ShaderMaterial,MeshBasicMaterial} from '@three';
import {Loop} from '@whs/core/Loop';
import glsl from 'glslify';
import { CameraModule} from '@whs:app';
import vertex from './vertex.glsl';
import fragment from './fragment.glsl';
import {Vector3} from 'three'
//自定义模块
 class FancyMaterialModule {
  constructor(app) {
    this.bridge = {
      material() {
        const material = new MeshBasicMaterial({
          color:0x363636
        })
        return material;
      }
    }
  }
   integrate() {
    this.alertRandom = function () {
      alert(Math.random());
    }
  }
}
// 使用已有模块
const cameraModule = new CameraModule({
  position:{
    x:0,
    y:120,
    z:150
  },
  fov:45,
  near:1,
  far:1000
})
cameraModule.camera.native.lookAt(new Vector3(0,0,0))
export {cameraModule,FancyMaterialModule}