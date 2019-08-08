import { ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    centered?: boolean;
    value: string | number;
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    variant?: 'standard' | 'scrollable' | 'fullWidth';
    children?: ReactNode;
    onChange?: (event: object, value: number) => void;
}
interface IClasses {
    classes?: {
        default: string;
        inherit: string;
        primary: string;
        secondary: string;
        indicator: string;
    };
}
declare const _default: import("react").ComponentType<Pick<Pick<IProps & IClasses, "children" | "style" | "margin" | "className" | "name" | "id" | "classes" | "color" | "onChange" | "variant" | "value"> & Partial<Pick<IProps & IClasses, "padding" | "centered">> & Partial<Pick<{
    centered: boolean;
    padding: string;
}, never>>, "children" | "style" | "padding" | "margin" | "className" | "name" | "id" | "color" | "onChange" | "variant" | "value" | "centered"> & import("@material-ui/core").StyledComponentProps<"inherit" | "default" | "primary" | "secondary" | "indicator">>;
export default _default;
