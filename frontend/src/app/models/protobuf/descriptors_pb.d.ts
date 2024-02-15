// package: blue.muffin.models.Protobuf
// file: src/app/models/protobuf/descriptors.proto

import * as jspb from "google-protobuf";

export class EntityRef extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRef.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRef): EntityRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRef;
  static deserializeBinaryFromReader(message: EntityRef, reader: jspb.BinaryReader): EntityRef;
}

export namespace EntityRef {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class AccountData extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserRef | undefined;
  setUser(value?: UserRef): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<ComponentRef>;
  setPermissionsList(value: Array<ComponentRef>): void;
  addPermissions(value?: ComponentRef, index?: number): ComponentRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountData.AsObject;
  static toObject(includeInstance: boolean, msg: AccountData): AccountData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountData;
  static deserializeBinaryFromReader(message: AccountData, reader: jspb.BinaryReader): AccountData;
}

export namespace AccountData {
  export type AsObject = {
    user?: UserRef.AsObject,
    permissionsList: Array<ComponentRef.AsObject>,
  }
}

export class UserRef extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): string;
  setPhone(value: string): void;

  hasAvatar(): boolean;
  clearAvatar(): void;
  getAvatar(): string;
  setAvatar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRef.AsObject;
  static toObject(includeInstance: boolean, msg: UserRef): UserRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRef;
  static deserializeBinaryFromReader(message: UserRef, reader: jspb.BinaryReader): UserRef;
}

export namespace UserRef {
  export type AsObject = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    avatar: string,
  }
}

export class ComponentRef extends jspb.Message {
  getComponentId(): string;
  setComponentId(value: string): void;

  clearAllowedList(): void;
  getAllowedList(): Array<number>;
  setAllowedList(value: Array<number>): void;
  addAllowed(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentRef.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentRef): ComponentRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentRef;
  static deserializeBinaryFromReader(message: ComponentRef, reader: jspb.BinaryReader): ComponentRef;
}

export namespace ComponentRef {
  export type AsObject = {
    componentId: string,
    allowedList: Array<number>,
  }
}

export class PropComplex1 extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAttrA(): number;
  setAttrA(value: number): void;

  getAttrB(): number;
  setAttrB(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropComplex1.AsObject;
  static toObject(includeInstance: boolean, msg: PropComplex1): PropComplex1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropComplex1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropComplex1;
  static deserializeBinaryFromReader(message: PropComplex1, reader: jspb.BinaryReader): PropComplex1;
}

export namespace PropComplex1 {
  export type AsObject = {
    name: string,
    attrA: number,
    attrB: number,
  }
}

export class PropComplex2 extends jspb.Message {
  getKeyParent(): string;
  setKeyParent(value: string): void;

  getKeyChild(): string;
  setKeyChild(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropComplex2.AsObject;
  static toObject(includeInstance: boolean, msg: PropComplex2): PropComplex2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropComplex2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropComplex2;
  static deserializeBinaryFromReader(message: PropComplex2, reader: jspb.BinaryReader): PropComplex2;
}

export namespace PropComplex2 {
  export type AsObject = {
    keyParent: string,
    keyChild: string,
  }
}

export class PropDetailed extends jspb.Message {
  getAttrA(): boolean;
  setAttrA(value: boolean): void;

  getAttrB(): boolean;
  setAttrB(value: boolean): void;

  getAttrC(): number;
  setAttrC(value: number): void;

  getAttrD(): number;
  setAttrD(value: number): void;

  hasProp1(): boolean;
  clearProp1(): void;
  getProp1(): PropComplex1 | undefined;
  setProp1(value?: PropComplex1): void;

  hasProp2(): boolean;
  clearProp2(): void;
  getProp2(): PropComplex2 | undefined;
  setProp2(value?: PropComplex2): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropDetailed.AsObject;
  static toObject(includeInstance: boolean, msg: PropDetailed): PropDetailed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropDetailed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropDetailed;
  static deserializeBinaryFromReader(message: PropDetailed, reader: jspb.BinaryReader): PropDetailed;
}

export namespace PropDetailed {
  export type AsObject = {
    attrA: boolean,
    attrB: boolean,
    attrC: number,
    attrD: number,
    prop1?: PropComplex1.AsObject,
    prop2?: PropComplex2.AsObject,
  }
}

export class PropFrame extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRefKey(): string;
  setRefKey(value: string): void;

  getIgnoredOnExchange(): boolean;
  setIgnoredOnExchange(value: boolean): void;

  getShapeId(): number;
  setShapeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropFrame.AsObject;
  static toObject(includeInstance: boolean, msg: PropFrame): PropFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropFrame;
  static deserializeBinaryFromReader(message: PropFrame, reader: jspb.BinaryReader): PropFrame;
}

export namespace PropFrame {
  export type AsObject = {
    id: number,
    title: string,
    refKey: string,
    ignoredOnExchange: boolean,
    shapeId: number,
  }
}

export class PropOutline extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getThickness(): number;
  setThickness(value: number): void;

  getWrapperId(): number;
  setWrapperId(value: number): void;

  getPosX(): number;
  setPosX(value: number): void;

  getPosY(): number;
  setPosY(value: number): void;

  getSizePx(): number;
  setSizePx(value: number): void;

  getSizeMm(): number;
  setSizeMm(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropOutline.AsObject;
  static toObject(includeInstance: boolean, msg: PropOutline): PropOutline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropOutline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropOutline;
  static deserializeBinaryFromReader(message: PropOutline, reader: jspb.BinaryReader): PropOutline;
}

export namespace PropOutline {
  export type AsObject = {
    id: number,
    thickness: number,
    wrapperId: number,
    posX: number,
    posY: number,
    sizePx: number,
    sizeMm: number,
  }
}

export class ContainedObject extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getWrapperId(): number;
  setWrapperId(value: number): void;

  getFrameId(): number;
  setFrameId(value: number): void;

  getThickness(): number;
  setThickness(value: number): void;

  clearOutlinesList(): void;
  getOutlinesList(): Array<PropOutline>;
  setOutlinesList(value: Array<PropOutline>): void;
  addOutlines(value?: PropOutline, index?: number): PropOutline;

  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): PropFrame | undefined;
  setFrame(value?: PropFrame): void;

  getParentId(): number;
  setParentId(value: number): void;

  getRefKey(): string;
  setRefKey(value: string): void;

  getPosX(): number;
  setPosX(value: number): void;

  getPosY(): number;
  setPosY(value: number): void;

  getSizePx(): number;
  setSizePx(value: number): void;

  getSizeMm(): number;
  setSizeMm(value: number): void;

  getIsVisible(): boolean;
  setIsVisible(value: boolean): void;

  getIsEditable(): boolean;
  setIsEditable(value: boolean): void;

  getIsAccessible(): boolean;
  setIsAccessible(value: boolean): void;

  getIsTested(): boolean;
  setIsTested(value: boolean): void;

  getContentLimit(): number;
  setContentLimit(value: number): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): PropDetailed | undefined;
  setDetails(value?: PropDetailed): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainedObject.AsObject;
  static toObject(includeInstance: boolean, msg: ContainedObject): ContainedObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainedObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainedObject;
  static deserializeBinaryFromReader(message: ContainedObject, reader: jspb.BinaryReader): ContainedObject;
}

export namespace ContainedObject {
  export type AsObject = {
    id: number,
    wrapperId: number,
    frameId: number,
    thickness: number,
    outlinesList: Array<PropOutline.AsObject>,
    frame?: PropFrame.AsObject,
    parentId: number,
    refKey: string,
    posX: number,
    posY: number,
    sizePx: number,
    sizeMm: number,
    isVisible: boolean,
    isEditable: boolean,
    isAccessible: boolean,
    isTested: boolean,
    contentLimit: number,
    details?: PropDetailed.AsObject,
  }
}

export class ContainerAttributes extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getRefKey(): string;
  setRefKey(value: string): void;

  getIgnoredOnExchange(): boolean;
  setIgnoredOnExchange(value: boolean): void;

  getRefPointId(): number;
  setRefPointId(value: number): void;

  getAttrA(): number;
  setAttrA(value: number): void;

  getAttrB(): number;
  setAttrB(value: number): void;

  clearFramesList(): void;
  getFramesList(): Array<PropFrame>;
  setFramesList(value: Array<PropFrame>): void;
  addFrames(value?: PropFrame, index?: number): PropFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerAttributes): ContainerAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainerAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerAttributes;
  static deserializeBinaryFromReader(message: ContainerAttributes, reader: jspb.BinaryReader): ContainerAttributes;
}

export namespace ContainerAttributes {
  export type AsObject = {
    id: number,
    title: string,
    refKey: string,
    ignoredOnExchange: boolean,
    refPointId: number,
    attrA: number,
    attrB: number,
    framesList: Array<PropFrame.AsObject>,
  }
}

export class Container extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRefKey(): string;
  setRefKey(value: string): void;

  getPosX(): number;
  setPosX(value: number): void;

  getPosY(): number;
  setPosY(value: number): void;

  getSizePx(): number;
  setSizePx(value: number): void;

  getSizeMm(): number;
  setSizeMm(value: number): void;

  getAttrA(): number;
  setAttrA(value: number): void;

  getAttrB(): number;
  setAttrB(value: number): void;

  clearChildrenList(): void;
  getChildrenList(): Array<ContainedObject>;
  setChildrenList(value: Array<ContainedObject>): void;
  addChildren(value?: ContainedObject, index?: number): ContainedObject;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): ContainerAttributes | undefined;
  setAttributes(value?: ContainerAttributes): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Container.AsObject;
  static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Container;
  static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
}

export namespace Container {
  export type AsObject = {
    id: number,
    refKey: string,
    posX: number,
    posY: number,
    sizePx: number,
    sizeMm: number,
    attrA: number,
    attrB: number,
    childrenList: Array<ContainedObject.AsObject>,
    attributes?: ContainerAttributes.AsObject,
  }
}

export class SubWrapper extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRevision(): number;
  setRevision(value: number): void;

  clearContainersList(): void;
  getContainersList(): Array<Container>;
  setContainersList(value: Array<Container>): void;
  addContainers(value?: Container, index?: number): Container;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: SubWrapper): SubWrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubWrapper;
  static deserializeBinaryFromReader(message: SubWrapper, reader: jspb.BinaryReader): SubWrapper;
}

export namespace SubWrapper {
  export type AsObject = {
    id: number,
    revision: number,
    containersList: Array<Container.AsObject>,
  }
}

