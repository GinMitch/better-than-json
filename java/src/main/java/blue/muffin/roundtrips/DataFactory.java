package blue.muffin.roundtrips;

import blue.muffin.models.Json;
import blue.muffin.models.Msgpack;
import blue.muffin.models.Protobuf;
import net.datafaker.Faker;

import java.util.Locale;
import java.util.UUID;

public class DataFactory {

    private static final Faker faker = new Faker(new Locale("en", "US"));

    public static Json.EntityRef smallObjectJson() {
        return Json.EntityRef.builder()
                .id(UUID.randomUUID().toString())
                .name(faker.country().name())
                .build();
    }

    public static Msgpack.EntityRef smallObjectMsgpack() {
        return Msgpack.EntityRef.builder()
                .id(UUID.randomUUID().toString())
                .name(faker.country().name())
                .build();
    }

    public static Protobuf.EntityRef smallObjectProtobuf() {
        return Protobuf.EntityRef.newBuilder()
                .setId(UUID.randomUUID().toString())
                .setName(faker.country().name())
                .build();
    }

    public static Json.AccountData mediumObjectJson() {
        return Json.AccountData.builder()
                .user(
                        Json.UserRef.builder()
                                .id(UUID.randomUUID().toString())
                                .firstName(faker.name().firstName())
                                .lastName(faker.name().lastName())
                                .email(faker.internet().emailAddress())
                                .phone(faker.phoneNumber().phoneNumberInternational())
                                .avatar(faker.avatar().image())
                                .build()
                )
                .permissions(
                        faker.collection(() ->
                                        Json.ComponentRef.builder()
                                                .componentId(faker.food().fruit())
                                                .allowed(
                                                        faker.collection(() -> faker.number().randomDigit())
                                                                .maxLen(8)
                                                                .generate()
                                                )
                                                .build()
                                )
                                .len(250, 350)
                                .generate()
                )
                .build();
    }

    public static Msgpack.AccountData mediumObjectMsgpack() {
        return Msgpack.AccountData.builder()
                .user(
                        Msgpack.UserRef.builder()
                                .id(UUID.randomUUID().toString())
                                .firstName(faker.name().firstName())
                                .lastName(faker.name().lastName())
                                .email(faker.internet().emailAddress())
                                .phone(faker.phoneNumber().phoneNumberInternational())
                                .avatar(faker.avatar().image())
                                .build()
                )
                .permissions(
                        faker.collection(() ->
                                        Msgpack.ComponentRef.builder()
                                                .componentId(faker.food().fruit())
                                                .allowed(
                                                        faker.collection(() -> faker.number().randomDigit())
                                                                .maxLen(8)
                                                                .generate()
                                                )
                                                .build()
                                )
                                .len(250, 350)
                                .generate()
                )
                .build();
    }

    public static Protobuf.AccountData mediumObjectProtobuf() {
        return Protobuf.AccountData.newBuilder()
                .setUser(
                        Protobuf.UserRef.newBuilder()
                                .setId(UUID.randomUUID().toString())
                                .setFirstName(faker.name().firstName())
                                .setLastName(faker.name().lastName())
                                .setEmail(faker.internet().emailAddress())
                                .setPhone(faker.phoneNumber().phoneNumberInternational())
                                .setAvatar(faker.avatar().image())
                                .build()
                )
                .addAllPermissions(
                        faker.collection(() ->
                                        Protobuf.ComponentRef.newBuilder()
                                                .setComponentId(faker.food().fruit())
                                                .addAllAllowed(
                                                        faker.collection(() -> faker.number().randomDigit())
                                                                .maxLen(8)
                                                                .generate()
                                                )
                                                .build()
                                )
                                .len(250, 350)
                                .generate()
                )
                .build();
    }

    public static Json.SubWrapper largeObjectJson() {
        return Json.SubWrapper.builder()
                .id(faker.number().randomDigit())
                .revision(faker.number().randomDigit())
                .containers(
                        faker.collection(() ->
                                        Json.Container.builder()
                                                .id(faker.number().randomDigit())
                                                .refKey(faker.compass().word())
                                                .posX(faker.number().randomDigit())
                                                .posY(faker.number().randomDigit())
                                                .sizePx(faker.number().randomDigit())
                                                .sizeMm(faker.number().randomDigit())
                                                .attrA(faker.number().randomDigit())
                                                .attrB(faker.number().randomDigit())
                                                .children(
                                                        faker.collection(() ->
                                                                        Json.ContainedObject.builder()
                                                                                .id(faker.number().randomDigit())
                                                                                .wrapperId(faker.number().randomDigit())
                                                                                .frameId(faker.number().randomDigit())
                                                                                .thickness(faker.number().randomDigit())
                                                                                .outlines(
                                                                                        faker.collection(() ->
                                                                                                        Json.PropOutline.builder()
                                                                                                                .id(faker.number().randomDigit())
                                                                                                                .thickness(faker.number().randomDigit())
                                                                                                                .wrapperId(faker.number().randomDigit())
                                                                                                                .posX(faker.number().randomDigit())
                                                                                                                .posY(faker.number().randomDigit())
                                                                                                                .sizePx(faker.number().randomDigit())
                                                                                                                .sizeMm(faker.number().randomDigit())
                                                                                                                .build()
                                                                                                )
                                                                                                .len(1, 3)
                                                                                                .generate()
                                                                                )
                                                                                .frame(
                                                                                        Json.PropFrame.builder()
                                                                                                .id(faker.number().randomDigit())
                                                                                                .title(faker.food().vegetable())
                                                                                                .refKey(faker.compass().word())
                                                                                                .ignoredOnExchange(faker.bool().bool())
                                                                                                .shapeId(faker.number().randomDigit())
                                                                                                .build()
                                                                                )
                                                                                .parentId(faker.number().randomDigit())
                                                                                .refKey(faker.compass().word())
                                                                                .posX(faker.number().randomDigit())
                                                                                .posY(faker.number().randomDigit())
                                                                                .sizePx(faker.number().randomDigit())
                                                                                .sizeMm(faker.number().randomDigit())
                                                                                .isVisible(faker.bool().bool())
                                                                                .isEditable(faker.bool().bool())
                                                                                .isAccessible(faker.bool().bool())
                                                                                .isTested(faker.bool().bool())
                                                                                .contentLimit(faker.number().randomDigit())
                                                                                .details(
                                                                                        Json.PropDetailed.builder()
                                                                                                .attrA(faker.bool().bool())
                                                                                                .attrB(faker.bool().bool())
                                                                                                .attrC(faker.number().randomDigit())
                                                                                                .attrD(faker.number().randomDigit())
                                                                                                .prop1(
                                                                                                        Json.PropComplex1.builder()
                                                                                                                .name(faker.lorem().word())
                                                                                                                .attrA(faker.number().randomDigit())
                                                                                                                .attrB(faker.number().randomDigit())
                                                                                                                .build()
                                                                                                )
                                                                                                .prop2(
                                                                                                        Json.PropComplex2.builder()
                                                                                                                .keyParent(faker.lorem().word())
                                                                                                                .keyChild(faker.lorem().word())
                                                                                                                .build()
                                                                                                )
                                                                                                .build()
                                                                                )
                                                                                .build()
                                                                )
                                                                .len(3, 8)
                                                                .generate()
                                                )
                                                .attributes(
                                                        Json.ContainerAttributes.builder()
                                                                .id(faker.number().randomDigit())
                                                                .title(faker.food().spice())
                                                                .refKey(faker.compass().word())
                                                                .ignoredOnExchange(faker.bool().bool())
                                                                .refPointId(faker.number().randomDigit())
                                                                .attrA(faker.number().randomDigit())
                                                                .attrB(faker.number().randomDigit())
                                                                .frames(
                                                                        faker.collection(() ->
                                                                                        Json.PropFrame.builder()
                                                                                                .id(faker.number().randomDigit())
                                                                                                .title(faker.food().vegetable())
                                                                                                .refKey(faker.compass().word())
                                                                                                .ignoredOnExchange(faker.bool().bool())
                                                                                                .shapeId(faker.number().randomDigit())
                                                                                                .build()
                                                                                )
                                                                                .len(3, 8)
                                                                                .generate()
                                                                )
                                                                .build()
                                                )
                                                .build()
                                )
                                .len(15, 25)
                                .generate()
                )
                .build();
    }

    public static Msgpack.SubWrapper largeObjectMsgpack() {
        return Msgpack.SubWrapper.builder()
                .id(faker.number().randomDigit())
                .revision(faker.number().randomDigit())
                .containers(
                        faker.collection(() ->
                                        Msgpack.Container.builder()
                                                .id(faker.number().randomDigit())
                                                .refKey(faker.compass().word())
                                                .posX(faker.number().randomDigit())
                                                .posY(faker.number().randomDigit())
                                                .sizePx(faker.number().randomDigit())
                                                .sizeMm(faker.number().randomDigit())
                                                .attrA(faker.number().randomDigit())
                                                .attrB(faker.number().randomDigit())
                                                .children(
                                                        faker.collection(() ->
                                                                        Msgpack.ContainedObject.builder()
                                                                                .id(faker.number().randomDigit())
                                                                                .wrapperId(faker.number().randomDigit())
                                                                                .frameId(faker.number().randomDigit())
                                                                                .thickness(faker.number().randomDigit())
                                                                                .outlines(
                                                                                        faker.collection(() ->
                                                                                                        Msgpack.PropOutline.builder()
                                                                                                                .id(faker.number().randomDigit())
                                                                                                                .thickness(faker.number().randomDigit())
                                                                                                                .wrapperId(faker.number().randomDigit())
                                                                                                                .posX(faker.number().randomDigit())
                                                                                                                .posY(faker.number().randomDigit())
                                                                                                                .sizePx(faker.number().randomDigit())
                                                                                                                .sizeMm(faker.number().randomDigit())
                                                                                                                .build()
                                                                                                )
                                                                                                .len(1, 3)
                                                                                                .generate()
                                                                                )
                                                                                .frame(
                                                                                        Msgpack.PropFrame.builder()
                                                                                                .id(faker.number().randomDigit())
                                                                                                .title(faker.food().vegetable())
                                                                                                .refKey(faker.compass().word())
                                                                                                .ignoredOnExchange(faker.bool().bool())
                                                                                                .shapeId(faker.number().randomDigit())
                                                                                                .build()
                                                                                )
                                                                                .parentId(faker.number().randomDigit())
                                                                                .refKey(faker.compass().word())
                                                                                .posX(faker.number().randomDigit())
                                                                                .posY(faker.number().randomDigit())
                                                                                .sizePx(faker.number().randomDigit())
                                                                                .sizeMm(faker.number().randomDigit())
                                                                                .isVisible(faker.bool().bool())
                                                                                .isEditable(faker.bool().bool())
                                                                                .isAccessible(faker.bool().bool())
                                                                                .isTested(faker.bool().bool())
                                                                                .contentLimit(faker.number().randomDigit())
                                                                                .details(
                                                                                        Msgpack.PropDetailed.builder()
                                                                                                .attrA(faker.bool().bool())
                                                                                                .attrB(faker.bool().bool())
                                                                                                .attrC(faker.number().randomDigit())
                                                                                                .attrD(faker.number().randomDigit())
                                                                                                .prop1(
                                                                                                        Msgpack.PropComplex1.builder()
                                                                                                                .name(faker.lorem().word())
                                                                                                                .attrA(faker.number().randomDigit())
                                                                                                                .attrB(faker.number().randomDigit())
                                                                                                                .build()
                                                                                                )
                                                                                                .prop2(
                                                                                                        Msgpack.PropComplex2.builder()
                                                                                                                .keyParent(faker.lorem().word())
                                                                                                                .keyChild(faker.lorem().word())
                                                                                                                .build()
                                                                                                )
                                                                                                .build()
                                                                                )
                                                                                .build()
                                                                )
                                                                .len(3, 8)
                                                                .generate()
                                                )
                                                .attributes(
                                                        Msgpack.ContainerAttributes.builder()
                                                                .id(faker.number().randomDigit())
                                                                .title(faker.food().spice())
                                                                .refKey(faker.compass().word())
                                                                .ignoredOnExchange(faker.bool().bool())
                                                                .refPointId(faker.number().randomDigit())
                                                                .attrA(faker.number().randomDigit())
                                                                .attrB(faker.number().randomDigit())
                                                                .frames(
                                                                        faker.collection(() ->
                                                                                        Msgpack.PropFrame.builder()
                                                                                                .id(faker.number().randomDigit())
                                                                                                .title(faker.food().vegetable())
                                                                                                .refKey(faker.compass().word())
                                                                                                .ignoredOnExchange(faker.bool().bool())
                                                                                                .shapeId(faker.number().randomDigit())
                                                                                                .build()
                                                                                )
                                                                                .len(3, 8)
                                                                                .generate()
                                                                )
                                                                .build()
                                                )
                                                .build()
                                )
                                .len(15, 25)
                                .generate()
                )
                .build();
    }

    public static Protobuf.SubWrapper largeObjectProtobuf() {
        return Protobuf.SubWrapper.newBuilder()
                .setId(faker.number().randomDigit())
                .setRevision(faker.number().randomDigit())
                .addAllContainers(
                        faker.collection(() ->
                                        Protobuf.Container.newBuilder()
                                                .setId(faker.number().randomDigit())
                                                .setRefKey(faker.compass().word())
                                                .setPosX(faker.number().randomDigit())
                                                .setPosY(faker.number().randomDigit())
                                                .setSizePx(faker.number().randomDigit())
                                                .setSizeMm(faker.number().randomDigit())
                                                .setAttrA(faker.number().randomDigit())
                                                .setAttrB(faker.number().randomDigit())
                                                .addAllChildren(
                                                        faker.collection(() ->
                                                                        Protobuf.ContainedObject.newBuilder()
                                                                                .setId(faker.number().randomDigit())
                                                                                .setWrapperId(faker.number().randomDigit())
                                                                                .setFrameId(faker.number().randomDigit())
                                                                                .setThickness(faker.number().randomDigit())
                                                                                .addAllOutlines(
                                                                                        faker.collection(() ->
                                                                                                        Protobuf.PropOutline.newBuilder()
                                                                                                                .setId(faker.number().randomDigit())
                                                                                                                .setThickness(faker.number().randomDigit())
                                                                                                                .setWrapperId(faker.number().randomDigit())
                                                                                                                .setPosX(faker.number().randomDigit())
                                                                                                                .setPosY(faker.number().randomDigit())
                                                                                                                .setSizePx(faker.number().randomDigit())
                                                                                                                .setSizeMm(faker.number().randomDigit())
                                                                                                                .build()
                                                                                                )
                                                                                                .len(1, 3)
                                                                                                .generate()
                                                                                )
                                                                                .setFrame(
                                                                                        Protobuf.PropFrame.newBuilder()
                                                                                                .setId(faker.number().randomDigit())
                                                                                                .setTitle(faker.food().vegetable())
                                                                                                .setRefKey(faker.compass().word())
                                                                                                .setIgnoredOnExchange(faker.bool().bool())
                                                                                                .setShapeId(faker.number().randomDigit())
                                                                                                .build()
                                                                                )
                                                                                .setParentId(faker.number().randomDigit())
                                                                                .setRefKey(faker.compass().word())
                                                                                .setPosX(faker.number().randomDigit())
                                                                                .setPosY(faker.number().randomDigit())
                                                                                .setSizePx(faker.number().randomDigit())
                                                                                .setSizeMm(faker.number().randomDigit())
                                                                                .setIsVisible(faker.bool().bool())
                                                                                .setIsEditable(faker.bool().bool())
                                                                                .setIsAccessible(faker.bool().bool())
                                                                                .setIsTested(faker.bool().bool())
                                                                                .setContentLimit(faker.number().randomDigit())
                                                                                .setDetails(
                                                                                        Protobuf.PropDetailed.newBuilder()
                                                                                                .setAttrA(faker.bool().bool())
                                                                                                .setAttrB(faker.bool().bool())
                                                                                                .setAttrC(faker.number().randomDigit())
                                                                                                .setAttrD(faker.number().randomDigit())
                                                                                                .setProp1(
                                                                                                        Protobuf.PropComplex1.newBuilder()
                                                                                                                .setName(faker.lorem().word())
                                                                                                                .setAttrA(faker.number().randomDigit())
                                                                                                                .setAttrB(faker.number().randomDigit())
                                                                                                                .build()
                                                                                                )
                                                                                                .setProp2(
                                                                                                        Protobuf.PropComplex2.newBuilder()
                                                                                                                .setKeyParent(faker.lorem().word())
                                                                                                                .setKeyChild(faker.lorem().word())
                                                                                                                .build()
                                                                                                )
                                                                                                .build()
                                                                                )
                                                                                .build()
                                                                )
                                                                .len(3, 8)
                                                                .generate()
                                                )
                                                .setAttributes(
                                                        Protobuf.ContainerAttributes.newBuilder()
                                                                .setId(faker.number().randomDigit())
                                                                .setTitle(faker.food().spice())
                                                                .setRefKey(faker.compass().word())
                                                                .setIgnoredOnExchange(faker.bool().bool())
                                                                .setRefPointId(faker.number().randomDigit())
                                                                .setAttrA(faker.number().randomDigit())
                                                                .setAttrB(faker.number().randomDigit())
                                                                .addAllFrames(
                                                                        faker.collection(() ->
                                                                                        Protobuf.PropFrame.newBuilder()
                                                                                                .setId(faker.number().randomDigit())
                                                                                                .setTitle(faker.food().vegetable())
                                                                                                .setRefKey(faker.compass().word())
                                                                                                .setIgnoredOnExchange(faker.bool().bool())
                                                                                                .setShapeId(faker.number().randomDigit())
                                                                                                .build()
                                                                                )
                                                                                .len(3, 8)
                                                                                .generate()
                                                                )
                                                                .build()
                                                )
                                                .build()
                                )
                                .len(15, 25)
                                .generate()
                )
                .build();
    }
}
