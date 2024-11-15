package com.example.live.user;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.slf4j.Logger;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public List<User> getAllUsers() {
        logger.info("[INFO]: Get all users in application");
        return  userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        logger.info("[INFO]: Get user in application ID {} ", id);
        return userRepository.findById(id).get();        
    }

    @PostMapping
    public User CreateUser(@RequestBody User user)  {
        logger.info("[INFO]: Create a user", user);
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        User existingUser = userRepository.findById(id).get();
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        logger.info("[INFO]: Update user with ID {} - Name: {} - Email: {}", id, user.getName(), user.getEmail());
        return userRepository.save(existingUser);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id){
        try {
            userRepository.findById(id).get();
            userRepository.deleteById(id);
            logger.info("[INFO]: User deleted successfully with ID {}", id);
            return "User deleted successfully";
            
        } catch (Exception e) {
            logger.error("[ERROR]: User not found ");
            return "User not found";
        }
    }
}
