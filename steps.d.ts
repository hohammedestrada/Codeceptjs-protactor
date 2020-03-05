/// <reference types='codeceptjs' />
type AutomationHelper = import('./src/utils/AutomationHelper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends AutomationHelper, CodeceptJS.Protractor, CodeceptJS.Mochawesome {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
