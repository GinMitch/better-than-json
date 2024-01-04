package blue.muffin.roundtrips;

import blue.muffin.models.Json;
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
}
