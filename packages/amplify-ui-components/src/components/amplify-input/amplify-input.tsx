import { Component, Prop, h } from '@stencil/core';
import { input } from './amplify-input.style';
import { TextFieldTypes } from '../../common/types';

@Component({
  tag: 'amplify-input',
  shadow: false,
})
export class AmplifyInput {
  /** The ID of the field.  Should match with its corresponding input's ID. */
  @Prop() fieldId: string;
  /** The text of the description.  Goes just below the label. */
  @Prop() description: string | null;
  /** The input type.  Can be any HTML input type. */
  @Prop() type?: TextFieldTypes = 'text';
  /** The callback, called when the input is modified by the user. */
  @Prop() onInput?: (inputEvent: Event) => void;
  /** (optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
  @Prop() placeholder?: string = '';

  render() {
    return (
      <input
        id={this.fieldId}
        aria-describedby={this.fieldId && this.description ? `${this.fieldId}-description` : null}
        type={this.type}
        onInput={this.onInput}
        placeholder={this.placeholder}
        class={input}
      />
    );
  }
}