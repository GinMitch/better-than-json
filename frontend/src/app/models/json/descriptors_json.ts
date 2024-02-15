export interface EntityRef {
  id: string;
  name: string;
}


export interface AccountData {
  user: UserRef;
  permissions: ComponentRef[];
}


export interface UserRef {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  avatar: string | null;
}


export interface ComponentRef {
  componentId: string;
  allowed: number[];
}


export interface PropComplex1 {
  name: string;
  attrA: number;
  attrB: number;
}


export interface PropComplex2 {
  keyParent: string;
  keyChild: string;
}


export interface PropDetailed {
  attrA: boolean;
  attrB: boolean;
  attrC: number;
  attrD: number;
  prop1: PropComplex1;
  prop2: PropComplex2;
}


export interface PropFrame {
  id: number;
  title: string;
  refKey: string;
  ignoredOnExchange: boolean;
  shapeId: number;
}


export interface PropOutline {
  id: number;
  thickness: number;
  wrapperId: number;
  posX: number;
  posY: number;
  sizePx: number;
  sizeMm: number;
}


export interface ContainedObject {
  id: number;
  wrapperId: number;
  frameId: number;
  thickness: number;
  outlines: PropOutline[];
  frame: PropFrame;
  parentId: number;
  refKey: string;
  posX: number;
  posY: number;
  sizePx: number;
  sizeMm: number;
  isVisible: boolean;
  isEditable: boolean;
  isAccessible: boolean;
  isTested: boolean;
  contentLimit: number;
  details: PropDetailed;
}


export interface ContainerAttributes {
  id: number;
  title: string;
  refKey: string;
  ignoredOnExchange: boolean;
  refPointId: number;
  attrA: number;
  attrB: number;
  frames: PropFrame[];
}


export interface Container {
  id: number;
  refKey: string;
  posX: number;
  posY: number;
  sizePx: number;
  sizeMm: number;
  attrA: number;
  attrB: number;
  children: ContainedObject[];
  attributes: ContainerAttributes;
}


export interface SubWrapper {
  id: number;
  revision: number;
  containers: Container[];
}
