package com.example.software_service_system;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

    @Test
    void contextLoads() {
        String hashName = "md5";
        String pwd = "12345";
       Object result =  new SimpleHash(hashName,pwd,null,2);
       System.out.print(result);

    }

}
