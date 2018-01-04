import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ResourceService} from './src/resource.service';

export {ResourceService} from "./src/resource.service";
export {Resource} from "./src/resource";
export {ArrayInterface} from "./src/array-interface";
export {ResourceArray} from "./src/resource-array";
export {Sort} from "./src/sort";
export {ResourceHelper} from "./src/resource-helper";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  exports: [HttpClientModule],
  providers: [HttpClient]
})
export class AngularHalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularHalModule,
      providers: [
        ResourceService
      ]
    };
  }
}