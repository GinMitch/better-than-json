package blue.muffin.roundtrips;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.msgpack.jackson.dataformat.MessagePackFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;

@SpringBootApplication
public class RoundtripsApplication {

    @Bean
    HttpMessageConverter messagePackMessageConverter() {
        return new AbstractJackson2HttpMessageConverter(
                new ObjectMapper(new MessagePackFactory()),
                new MediaType("application", "x-msgpack")) {
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(RoundtripsApplication.class, args);
    }

}
