package blue.muffin.roundtrips;

import blue.muffin.models.Json;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class IndexController {

    @GetMapping(value = "/json/small", produces = "application/json")
    public Json.EntityRef getJsonSmall() {
        return DataFactory.smallObjectJson();
    }

    @GetMapping(value = "/json/medium", produces = "application/json")
    public Json.AccountData getJsonMedium() {
        return DataFactory.mediumObjectJson();
    }

    @PostMapping(value = "/json/large", consumes = "application/json", produces = "application/json")
    public Json.SubWrapper getJsonLarge(@RequestBody Json.SubWrapper request) {
        System.out.println(request.getId());
        return DataFactory.largeObjectJson();
    }
}
