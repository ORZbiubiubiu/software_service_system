package com.example.software_service_system.Entity.AdminEntity;

public class action_type {
    private String type;
    private int count;

    @Override
    public String toString() {
        return "action_type{" +
                "type='" + type + '\'' +
                ", count=" + count +
                '}';
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public action_type(String type, int count) {
        this.type = type;
        this.count = count;
    }
}
