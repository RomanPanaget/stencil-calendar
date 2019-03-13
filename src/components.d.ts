/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppDateInput {
    'printDate': () => string;
  }
  interface AppDateInputAttributes extends StencilHTMLAttributes {}

  interface AppDatePicker {
    'date': Date;
    'daysInMonth': (date: Date) => number;
    'dismiss': (data?: any) => void;
    'getMonthMatrix': (date: Date) => any[];
    'isSelectedDate': (date: Date) => boolean;
    'months': any;
    'nextMonth': () => void;
    'previousMonth': () => void;
    'selectDate': (date: Date) => void;
    'weekDays': any;
  }
  interface AppDatePickerAttributes extends StencilHTMLAttributes {
    'date'?: Date;
    'months'?: any;
    'weekDays'?: any;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppDateInput': Components.AppDateInput;
    'AppDatePicker': Components.AppDatePicker;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-date-input': Components.AppDateInputAttributes;
    'app-date-picker': Components.AppDatePickerAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppDateInputElement extends Components.AppDateInput, HTMLStencilElement {}
  var HTMLAppDateInputElement: {
    prototype: HTMLAppDateInputElement;
    new (): HTMLAppDateInputElement;
  };

  interface HTMLAppDatePickerElement extends Components.AppDatePicker, HTMLStencilElement {}
  var HTMLAppDatePickerElement: {
    prototype: HTMLAppDatePickerElement;
    new (): HTMLAppDatePickerElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-date-input': HTMLAppDateInputElement
    'app-date-picker': HTMLAppDatePickerElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-date-input': HTMLAppDateInputElement;
    'app-date-picker': HTMLAppDatePickerElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
