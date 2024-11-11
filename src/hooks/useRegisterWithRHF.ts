// react
import { ChangeEventHandler, ComponentProps, FocusEventHandler } from "react";

// other libraries
import { useFormContext } from "react-hook-form";

// types
interface UseRegisterWithRHFProps<T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>> {
  fieldName: string;
  props: ComponentProps<T>;
}

export default function useRegisterWithRHF<T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>, E>({
  fieldName,
  props,
}: UseRegisterWithRHFProps<T>) {
  // Retrieve all needed useform hook methods and props
  const { register } = useFormContext();

  // Extract the event handlers and other properties required to "register" this component with the react hook form
  const { onChange: rhfOnChange, onBlur: rhfOnBlur, ref } = register(fieldName);

  // Extract the component's original event handlers, which will be invoked first
  const { onChange, onBlur, ...rest } = props;

  const handleChange: ChangeEventHandler<E> = (ev) => {
    // First call the component's original event handler
    onChange?.(ev);

    // Then notify the react hook form directly (via their handler)
    rhfOnChange(ev);
  };

  const handleBlur: FocusEventHandler<E> = (ev) => {
    // First call the component's original event handler
    onBlur?.(ev);

    // Then notify the react hook form directly (via their handler)
    rhfOnBlur(ev);
  };

  return [handleChange, handleBlur, ref, rest];
}
