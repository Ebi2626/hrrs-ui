import { ChildrenType } from "../../models/utils.model";

export enum ModalSize {
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
    FULL = 'full',
}

export interface ModalProps {
    children: ChildrenType,
    size: ModalSize,
    onClose?: () => void,
    actions?: Array<()=> void>,
} 