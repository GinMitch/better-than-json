import { faker } from '@faker-js/faker';

import * as Json from '../models/json/descriptors_json';
import * as Msgpack from '../models/msgpack/descriptors_mp';

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
}
