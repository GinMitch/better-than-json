package blue.muffin.models;

import jakarta.annotation.Nullable;
import lombok.Builder;
import lombok.Data;

import java.util.List;

public final class Msgpack {

    @Data
    @Builder
    public static class EntityRef {
        private String id;
        private String name;
    }

    @Data
    @Builder
    public static class AccountData {
        private Msgpack.UserRef user;
        private List<Msgpack.ComponentRef> permissions;
    }

    @Data
    @Builder
    public static class UserRef {
        private String id;
        private String firstName;
        private String lastName;
        private String email;
        @Nullable
        private String phone;
        @Nullable
        private String avatar;
    }

    @Data
    @Builder
    public static class ComponentRef {
        private String componentId;
        private List<Integer> allowed;
    }

    @Data
    @Builder
    public static class PropComplex1 {
        private String name;
        private Integer attrA;
        private Integer attrB;
    }

    @Data
    @Builder
    public static class PropComplex2 {
        private String keyParent;
        private String keyChild;
    }

    @Data
    @Builder
    public static class PropDetailed {
        private Boolean attrA;
        private Boolean attrB;
        private Integer attrC;
        private Integer attrD;
        private Msgpack.PropComplex1 prop1;
        private Msgpack.PropComplex2 prop2;
    }

    @Data
    @Builder
    public static class PropFrame {
        private Integer id;
        private String title;
        private String refKey;
        private Boolean ignoredOnExchange;
        private Integer shapeId;
    }

    @Data
    @Builder
    public static class PropOutline {
        private Integer id;
        private Integer thickness;
        private Integer wrapperId;
        private Integer posX;
        private Integer posY;
        private Integer sizePx;
        private Integer sizeMm;
    }

    @Data
    @Builder
    public static class ContainedObject {
        private Integer id;
        private Integer wrapperId;
        private Integer frameId;
        private Integer thickness;
        private List<Msgpack.PropOutline> outlines;
        private Msgpack.PropFrame frame;
        private Integer parentId;
        private String refKey;
        private Integer posX;
        private Integer posY;
        private Integer sizePx;
        private Integer sizeMm;
        private Boolean isVisible;
        private Boolean isEditable;
        private Boolean isAccessible;
        private Boolean isTested;
        private Integer contentLimit;
        private Msgpack.PropDetailed details;
    }

    @Data
    @Builder
    public static class ContainerAttributes {
        private Integer id;
        private String title;
        private String refKey;
        private Boolean ignoredOnExchange;
        private Integer refPointId;
        private Integer attrA;
        private Integer attrB;
        private List<Msgpack.PropFrame> frames;
    }

    @Data
    @Builder
    public static class Container {
        private Integer id;
        private String refKey;
        private Integer posX;
        private Integer posY;
        private Integer sizePx;
        private Integer sizeMm;
        private Integer attrA;
        private Integer attrB;
        private List<Msgpack.ContainedObject> children;
        private Msgpack.ContainerAttributes attributes;
    }

    @Data
    @Builder
    public static class SubWrapper {
        private Integer id;
        private Integer revision;
        private List<Msgpack.Container> containers;
    }
}
