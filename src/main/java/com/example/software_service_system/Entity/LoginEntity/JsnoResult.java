package com.example.software_service_system.Entity.LoginEntity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class JsnoResult<T> {
    private int code;
    private T data;
}
