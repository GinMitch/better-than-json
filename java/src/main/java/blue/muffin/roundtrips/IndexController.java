package blue.muffin.roundtrips;

import blue.muffin.models.Json;
import blue.muffin.models.Msgpack;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class IndexController {

    @GetMapping(value = "/json/small", produces = "application/json")
    public Json.EntityRef getJsonSmall() {
        return DataFactory.smallObjectJson();
    }

    @GetMapping(value = "/msgpack/small", produces = "application/x-msgpack")
    public Msgpack.EntityRef getMsgpackSmall() {
        return DataFactory.smallObjectMsgpack();
    }

    @GetMapping(value = "/json/medium", produces = "application/json")
    public Json.AccountData getJsonMedium() {
        return DataFactory.mediumObjectJson();
    }

    @GetMapping(value = "/msgpack/medium", produces = "application/x-msgpack")
    public Msgpack.AccountData getMsgpackMedium() {
        return DataFactory.mediumObjectMsgpack();
    }

    @PostMapping(value = "/json/large", consumes = "application/json", produces = "application/json")
    public Json.SubWrapper getJsonLarge(@RequestBody Json.SubWrapper request) {
        System.out.println(request.getId());
        return DataFactory.largeObjectJson();
    }

    @PostMapping(value = "/msgpack/large", consumes = "application/x-msgpack", produces = "application/x-msgpack")
    public Msgpack.SubWrapper getMsgpackLarge(@RequestBody Msgpack.SubWrapper request) {
        System.out.println(request.getId());
        return DataFactory.largeObjectMsgpack();
    }
}
