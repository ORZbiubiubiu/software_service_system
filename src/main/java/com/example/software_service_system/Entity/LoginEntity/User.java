package com.example.software_service_system.Entity.LoginEntity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Data
@Getter
@Setter
@ToString
public class User {

    private int id;
    private String username;
    private String password;
    private List<Role> roleList;
//    private List<Permission> permissionList;
}
