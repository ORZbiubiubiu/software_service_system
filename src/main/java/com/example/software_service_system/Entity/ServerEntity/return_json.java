package com.example.software_service_system.Entity.ServerEntity;

public class return_json {
    private int Code;
    private return_data Data;
    public void setCode(int Code) {
        this.Code = Code;
    }
    public int getCode() {
        return Code;
    }

    public void setData(return_data Data) {
        this.Data = Data;
    }
    public return_data getData() {
        return Data;
    }
}
