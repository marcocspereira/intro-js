import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  /**
   * The set of NgModules whose exported declarables
   * are available to templates in this module.
   */
  imports: [CommonModule],
  /**
   * The set of components, directives, and pipes (declarables)
   * that belong to this module.
   */
  declarations: [],
  /**
   * The set of injectable objects that are available in the injector
   * of this module.
   */
  providers: [],
  /**
   * The set of components, directives, and pipes declared in this
   * NgModule that can be used in the template of any component that is part of an
   * NgModule that imports this NgModule. Exported declarations are the module's public API.
   *
   * A declarable belongs to one and only one NgModule.
   * A module can list another module among its exports, in which case all of that module's
   * public declaration are exported.
   */
  exports: []
})
export class SharedModule {}
