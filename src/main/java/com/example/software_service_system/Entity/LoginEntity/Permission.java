package com.example.software_service_system.Entity.LoginEntity;

import lombok.Getter;
import lombok.ToString;
import org.springframework.stereotype.Service;

@Getter
@Service
@ToString
public class Permission {
    private int id;
    private String name;
    private String url;
}
