package com.example.software_service_system.Entity.buryPointEntity;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@ToString
public class statistic {
    String api_name;
    String user_type;
    Integer pv;
    Integer uv;
    Integer ip_count;
}
