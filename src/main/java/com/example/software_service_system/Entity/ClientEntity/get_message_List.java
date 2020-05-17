package com.example.software_service_system.Entity.ClientEntity;

public class get_message_List {
    private int id;
    private String getName;
    private String sendName;
    private String justMessage;
    private String messageDate;

    public void setId(int id) {
        this.id = id;
    }

    public void setGetName(String getName) {
        this.getName = getName;
    }

    public void setJustMessage(String justMessage) {
        this.justMessage = justMessage;
    }

    public void setMessageDate(String messageDate) {
        this.messageDate = messageDate;
    }

    public void setSendName(String sendName) {
        this.sendName = sendName;
    }

    public int getId() {
        return id;
    }

    public String getGetName() {
        return getName;
    }

    public String getJustMessage() {
        return justMessage;
    }

    public String getMessageDate() {
        return messageDate;
    }

    public String getSendName() {
        return sendName;
    }
}
