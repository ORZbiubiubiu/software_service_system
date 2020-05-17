package com.example.software_service_system.controller.LoginController;

//@RestController
//@RequestMapping(value = "/Client",method = {RequestMethod.GET,RequestMethod.POST})
//public class ClientCRUD {
//    @Autowired
//    private OrderService orderService;
//
//    @RequestMapping(value = "/getOrder",method = RequestMethod.GET)
//    @ResponseBody
//    public JsnoResult<OrderData<Order>> ListOrder(String Name){
//        return orderService.findOrderByName(Name);
//    }

//    public List<Order> ListOrder(String Name){
//        return orderService.findByName(Name);
//    }

//    @CrossOrigin
//    @PostMapping(value = "api/login")
//    @ResponseBody
//    public Result login(User requestUser){
//        String username = requestUser.getUsername();
//        username = HtmlUtils.htmlEscape(username);
//        if (!Objects.equals("admin", username) || !Objects.equals("123456", requestUser.getPassword())) {
//            String message = "账号密码错误";
//            System.out.println("test");
//            return new Result(400);
//        } else {
//            return new Result(200);
//        }
//    }
//}
