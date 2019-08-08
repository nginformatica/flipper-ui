import { ReactNode, FC } from 'react';
import { IProps as IPaper } from './Paper';
interface IProps extends IPaper {
    actions?: ReactNode;
    defaultExpanded?: boolean;
    details?: ReactNode;
    disabled?: boolean;
    expandIcon?: ReactNode;
    expanded?: boolean;
    summary?: ReactNode;
    summaryStyle?: object;
    detailsStyle?: object;
    actionsStyle?: object;
    onChange?: (event?: any, expanded?: any) => void;
}
declare const ExpansionPanel: FC<IProps>;
export default ExpansionPanel;
