import {App} from '@whs/core/App';
import {
  ElementModule,
  SceneModule,
  RenderingModule,
  ResizeModule
} from '@whs:app';
import {OrbitModule} from '@whs:controls/orbit';
import {cameraModule} from './modules/FancyMaterialModule';
import {plane,teapot} from './components/BasicComponent';
const app = new App([
  new ElementModule({
    container: document.getElementById('app')
  }),
  new SceneModule(),
  cameraModule,
  new RenderingModule({bgColor: 0x000000}),
  new OrbitModule(),
  new ResizeModule()
]);
app.add(teapot)
app.add(plane)
app.start();
