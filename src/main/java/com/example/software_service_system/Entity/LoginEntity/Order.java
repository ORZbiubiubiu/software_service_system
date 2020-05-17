package com.example.software_service_system.Entity.LoginEntity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;
@Getter
@Setter
@ToString
public class Order {
        private int id;
        private String orderid;
        private String userName;
        private String softwareName;
        private Date buyDate;
}
