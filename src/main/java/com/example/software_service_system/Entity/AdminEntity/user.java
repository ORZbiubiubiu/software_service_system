
package com.example.software_service_system.Entity.AdminEntity;


/*@Data
@NoArgsConstructor
@AllArgsConstructor*/
public class user {
    int id;
    String userName;

    String userState;

    public user(int id, String userName, String userState) {
        this.id

                = id;
        this.userName = userName;
        this.userState = userState;
    }

    @Override
    public String toString() {
        return "user{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", userState='" + userState + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id

                = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserState() {
        return userState;
    }

    public void setUserState(String userState) {
        this.userState = userState;
    }
}


//package com.example.software_service_system.Entity.AdminEntity;
//
//
///*@Data
//@NoArgsConstructor
//@AllArgsConstructor*/
//public class user {
//    int id;
//    String userName;
//    String userPassword;
//    String userState;
//
//    public user(int id, String userName, String userPassword, String userState) {
//        this.id = id;
//        this.userName = userName;
//        this.userPassword = userPassword;
//        this.userState = userState;
//    }
//
//    @Override
//    public String toString() {
//        return "user{" +
//                "id=" + id +
//                ", userName='" + userName + '\'' +
//                ", userPassword='" + userPassword + '\'' +
//                ", userState='" + userState + '\'' +
//                '}';
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getUserName() {
//        return userName;
//    }
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//
//    public String getUserPassword() {
//        return userPassword;
//    }
//
//    public void setUserPassword(String userPassword) {
//        this.userPassword = userPassword;
//    }
//
//    public String getUserState() {
//        return userState;
//    }
//
//    public void setUserState(String userState) {
//        this.userState = userState;
//    }
//}
