export const componentFactoryTemplate = ({
  imports,
  components,
  registrations,
  lazyRegistrations,
  declarations,
}: {
  imports: string[];
  components: string[];
  registrations: string[];
  lazyRegistrations: string[];
  declarations: string[];
}) => `// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory/index.ts to modify the generation of this file.
// Use app-components.shared.module.ts to modify the imports, etc of this module.
// Note: code-generation is optional! See ./.gitignore for directions to remove it,
// if you do not want it.

import { NgModule } from '@angular/core';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { AppComponentsSharedModule } from './app-components.shared.module';
${imports.join('\n')}

export const components = [
  ${components.map((c) => `'${c}'`).join(',\n  ')}
];

@NgModule({
  imports: [
    AppComponentsSharedModule,
    JssModule.withComponents([
      ${registrations.join('\n      ')}
    ], [
      ${lazyRegistrations.join('\n      ')}
    ]),
  ],
  exports: [
    JssModule,
    AppComponentsSharedModule,
  ],
  declarations: [
    ${declarations.join('\n    ')}
  ],
})
export class AppComponentsModule { }
`;