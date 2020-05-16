package com.example.software_service_system.Entity.LoginEntity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RolePermission {
    private int id;
    private int roleID;
    private int permissionID;
}
