package com.example.software_service_system.Entity.LoginEntity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Setter
@Getter
@ToString
public class OrderData<T> {
    private String message;
    private List<T> orderData;
}
