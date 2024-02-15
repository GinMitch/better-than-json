import { faker } from '@faker-js/faker';

import * as Json from '../models/json/descriptors_json';
import * as Msgpack from '../models/msgpack/descriptors_mp';
import * as Protobuf from '../models/protobuf/descriptors_pb';

const MSI = 2147483647;

export class DataFactory {
  public static largeObjectJson(): Json.SubWrapper {
    return {
      id: faker.number.int(MSI),
      revision: faker.number.int(MSI),
      containers: faker.helpers.multiple<Json.Container>(() => ({
        id: faker.number.int(MSI),
        refKey: faker.color.human(),
        posX: faker.number.int(MSI),
        posY: faker.number.int(MSI),
        sizePx: faker.number.int(MSI),
        sizeMm: faker.number.int(MSI),
        attrA: faker.number.int(MSI),
        attrB: faker.number.int(MSI),
        children: faker.helpers.multiple<Json.ContainedObject>(() => ({
          id: faker.number.int(MSI),
          wrapperId: faker.number.int(MSI),
          frameId: faker.number.int(MSI),
          thickness: faker.number.int(MSI),
          outlines: faker.helpers.multiple<Json.PropOutline>(() => ({
            id: faker.number.int(MSI),
            thickness: faker.number.int(MSI),
            wrapperId: faker.number.int(MSI),
            posX: faker.number.int(MSI),
            posY: faker.number.int(MSI),
            sizePx: faker.number.int(MSI),
            sizeMm: faker.number.int(MSI),
          }), { count: { min: 1, max: 3 } }),
          frame: {
            id: faker.number.int(MSI),
            title: faker.vehicle.manufacturer(),
            refKey: faker.color.human(),
            ignoredOnExchange: faker.datatype.boolean(),
            shapeId: faker.number.int(MSI),
          },
          parentId: faker.number.int(MSI),
          refKey: faker.color.human(),
          posX: faker.number.int(MSI),
          posY: faker.number.int(MSI),
          sizePx: faker.number.int(MSI),
          sizeMm: faker.number.int(MSI),
          isVisible: faker.datatype.boolean(),
          isEditable: faker.datatype.boolean(),
          isAccessible: faker.datatype.boolean(),
          isTested: faker.datatype.boolean(),
          contentLimit: faker.number.int(MSI),
          details: {
            attrA: faker.datatype.boolean(),
            attrB: faker.datatype.boolean(),
            attrC: faker.number.int(MSI),
            attrD: faker.number.int(MSI),
            prop1: {
              name: faker.lorem.word(),
              attrA: faker.number.int(MSI),
              attrB: faker.number.int(MSI),
            },
            prop2: {
              keyParent: faker.lorem.word(),
              keyChild: faker.lorem.word(),
            },
          },
        }), { count: { min: 3, max: 8 } }),
        attributes: {
          id: faker.number.int(MSI),
          title: faker.vehicle.vrm(),
          refKey: faker.color.human(),
          ignoredOnExchange: faker.datatype.boolean(),
          refPointId: faker.number.int(MSI),
          attrA: faker.number.int(MSI),
          attrB: faker.number.int(MSI),
          frames: faker.helpers.multiple<Json.PropFrame>(() => ({
            id: faker.number.int(MSI),
            title: faker.animal.cat(),
            refKey: faker.color.human(),
            ignoredOnExchange: faker.datatype.boolean(),
            shapeId: faker.number.int(MSI),
          }), { count: { min: 3, max: 8 } }),
        },
      }), { count: { min: 15, max: 25 } }),
    };
  }

  public static largeObjectMsgpack(): Msgpack.SubWrapper {
    return {
      id: faker.number.int(MSI),
      revision: faker.number.int(MSI),
      containers: faker.helpers.multiple<Msgpack.Container>(() => ({
        id: faker.number.int(MSI),
        refKey: faker.color.human(),
        posX: faker.number.int(MSI),
        posY: faker.number.int(MSI),
        sizePx: faker.number.int(MSI),
        sizeMm: faker.number.int(MSI),
        attrA: faker.number.int(MSI),
        attrB: faker.number.int(MSI),
        children: faker.helpers.multiple<Msgpack.ContainedObject>(() => ({
          id: faker.number.int(MSI),
          wrapperId: faker.number.int(MSI),
          frameId: faker.number.int(MSI),
          thickness: faker.number.int(MSI),
          outlines: faker.helpers.multiple<Msgpack.PropOutline>(() => ({
            id: faker.number.int(MSI),
            thickness: faker.number.int(MSI),
            wrapperId: faker.number.int(MSI),
            posX: faker.number.int(MSI),
            posY: faker.number.int(MSI),
            sizePx: faker.number.int(MSI),
            sizeMm: faker.number.int(MSI),
          }), { count: { min: 1, max: 3 } }),
          frame: {
            id: faker.number.int(MSI),
            title: faker.vehicle.manufacturer(),
            refKey: faker.color.human(),
            ignoredOnExchange: faker.datatype.boolean(),
            shapeId: faker.number.int(MSI),
          },
          parentId: faker.number.int(MSI),
          refKey: faker.color.human(),
          posX: faker.number.int(MSI),
          posY: faker.number.int(MSI),
          sizePx: faker.number.int(MSI),
          sizeMm: faker.number.int(MSI),
          isVisible: faker.datatype.boolean(),
          isEditable: faker.datatype.boolean(),
          isAccessible: faker.datatype.boolean(),
          isTested: faker.datatype.boolean(),
          contentLimit: faker.number.int(MSI),
          details: {
            attrA: faker.datatype.boolean(),
            attrB: faker.datatype.boolean(),
            attrC: faker.number.int(MSI),
            attrD: faker.number.int(MSI),
            prop1: {
              name: faker.lorem.word(),
              attrA: faker.number.int(MSI),
              attrB: faker.number.int(MSI),
            },
            prop2: {
              keyParent: faker.lorem.word(),
              keyChild: faker.lorem.word(),
            },
          },
        }), { count: { min: 3, max: 8 } }),
        attributes: {
          id: faker.number.int(MSI),
          title: faker.vehicle.vrm(),
          refKey: faker.color.human(),
          ignoredOnExchange: faker.datatype.boolean(),
          refPointId: faker.number.int(MSI),
          attrA: faker.number.int(MSI),
          attrB: faker.number.int(MSI),
          frames: faker.helpers.multiple<Msgpack.PropFrame>(() => ({
            id: faker.number.int(MSI),
            title: faker.animal.cat(),
            refKey: faker.color.human(),
            ignoredOnExchange: faker.datatype.boolean(),
            shapeId: faker.number.int(MSI),
          }), { count: { min: 3, max: 8 } }),
        },
      }), { count: { min: 15, max: 25 } }),
    };
  }

  public static largeObjectProtobuf(): Protobuf.SubWrapper {
    const subWrapper = new Protobuf.SubWrapper();
    subWrapper.setId(faker.number.int(MSI));
    subWrapper.setRevision(faker.number.int(MSI));

    subWrapper.setContainersList(faker.helpers.multiple<Protobuf.Container>(() => {
      const container = new Protobuf.Container();
      container.setId(faker.number.int(MSI));
      container.setRefKey(faker.color.human());
      container.setPosX(faker.number.int(MSI));
      container.setPosY(faker.number.int(MSI));
      container.setSizePx(faker.number.int(MSI));
      container.setSizeMm(faker.number.int(MSI));
      container.setAttrA(faker.number.int(MSI));
      container.setAttrB(faker.number.int(MSI));

      container.setChildrenList(faker.helpers.multiple<Protobuf.ContainedObject>(() => {
        const containedObject = new Protobuf.ContainedObject();
        containedObject.setId(faker.number.int(MSI));
        containedObject.setWrapperId(faker.number.int(MSI));
        containedObject.setFrameId(faker.number.int(MSI));
        containedObject.setThickness(faker.number.int(MSI));

        containedObject.setOutlinesList(faker.helpers.multiple<Protobuf.PropOutline>(() => {
          const propOutline = new Protobuf.PropOutline();
          propOutline.setId(faker.number.int(MSI));
          propOutline.setThickness(faker.number.int(MSI));
          propOutline.setWrapperId(faker.number.int(MSI));
          propOutline.setPosX(faker.number.int(MSI));
          propOutline.setPosY(faker.number.int(MSI));
          propOutline.setSizePx(faker.number.int(MSI));
          propOutline.setSizeMm(faker.number.int(MSI));
          return propOutline;
        }, { count: { min: 1, max: 3 } }));

        const propFrame = new Protobuf.PropFrame();
        propFrame.setId(faker.number.int(MSI));
        propFrame.setTitle(faker.vehicle.manufacturer());
        propFrame.setRefKey(faker.color.human());
        propFrame.setIgnoredOnExchange(faker.datatype.boolean());
        propFrame.setShapeId(faker.number.int(MSI));
        containedObject.setFrame(propFrame);

        containedObject.setParentId(faker.number.int(MSI));
        containedObject.setRefKey(faker.color.human());
        containedObject.setPosX(faker.number.int(MSI));
        containedObject.setPosY(faker.number.int(MSI));
        containedObject.setSizePx(faker.number.int(MSI));
        containedObject.setSizeMm(faker.number.int(MSI));
        containedObject.setIsVisible(faker.datatype.boolean());
        containedObject.setIsEditable(faker.datatype.boolean());
        containedObject.setIsAccessible(faker.datatype.boolean());
        containedObject.setIsTested(faker.datatype.boolean());
        containedObject.setContentLimit(faker.number.int(MSI));

        const propDetailed = new Protobuf.PropDetailed();
        propDetailed.setAttrA(faker.datatype.boolean());
        propDetailed.setAttrB(faker.datatype.boolean());
        propDetailed.setAttrC(faker.number.int(MSI));
        propDetailed.setAttrD(faker.number.int(MSI));

        const propComplex1 = new Protobuf.PropComplex1();
        propComplex1.setName(faker.lorem.word());
        propComplex1.setAttrA(faker.number.int(MSI));
        propComplex1.setAttrB(faker.number.int(MSI));

        const propComplex2 = new Protobuf.PropComplex2();
        propComplex2.setKeyParent(faker.lorem.word());
        propComplex2.setKeyChild(faker.lorem.word());

        containedObject.setDetails(propDetailed);

        return containedObject;
      }, { count: { min: 3, max: 8 } }));

      const containerAttributes = new Protobuf.ContainerAttributes();
      containerAttributes.setId(faker.number.int(MSI));
      containerAttributes.setTitle(faker.vehicle.vrm());
      containerAttributes.setRefKey(faker.color.human());
      containerAttributes.setIgnoredOnExchange(faker.datatype.boolean());
      containerAttributes.setRefPointId(faker.number.int(MSI));
      containerAttributes.setAttrA(faker.number.int(MSI));
      containerAttributes.setAttrB(faker.number.int(MSI));

      containerAttributes.setFramesList(faker.helpers.multiple<Protobuf.PropFrame>(() => {
        const propFrame = new Protobuf.PropFrame();
        propFrame.setId(faker.number.int(MSI));
        propFrame.setTitle(faker.animal.cat());
        propFrame.setRefKey(faker.color.human());
        propFrame.setIgnoredOnExchange(faker.datatype.boolean());
        propFrame.setShapeId(faker.number.int(MSI));
        return propFrame;
      }, { count: { min: 3, max: 8 } }));

      container.setAttributes();

      return container;
    }, { count: { min: 15, max: 25 } }));

    return subWrapper;
  }
}
