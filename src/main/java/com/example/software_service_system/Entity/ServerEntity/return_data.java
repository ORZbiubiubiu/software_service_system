package com.example.software_service_system.Entity.ServerEntity;

import java.util.List;

public class return_data<T> {
    private String message;
    private List<T> list;
    public void setMessage(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }

    public void setList(List<T> list) {
        this.list = list;
    }
    public List<T> getList() {
        return list;
    }
}
