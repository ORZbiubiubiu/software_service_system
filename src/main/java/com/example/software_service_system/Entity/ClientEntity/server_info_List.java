package com.example.software_service_system.Entity.ClientEntity;

public class server_info_List {
    private int id;
    private String serverName;
    private String serverSoftware;
    private String serverState;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }

    public String getServerName() {
        return serverName;
    }

    public String getServerSoftware() {
        return serverSoftware;
    }

    public void setServerSoftware(String serverSoftware) {
        this.serverSoftware = serverSoftware;
    }

    public String getServerState() {
        return serverState;
    }

    public void setServerState(String serverState) {
        this.serverState = serverState;
    }
}
