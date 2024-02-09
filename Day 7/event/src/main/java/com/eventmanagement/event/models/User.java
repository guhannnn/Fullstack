package com.eventmanagement.event.models;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.UUID;

import java.util.Collection;
import java.util.List;
import com.eventmanagement.event.enumerated.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "users")
public class User implements UserDetails{
    @Id
    @GeneratedValue(strategy = UUID)
    private String id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Enumerated(STRING)
    private Role role;

    @Column(nullable = false)
    private String email;
    
   @Column(nullable = true)
   private String image;

   @Column(nullable = true)
   private String useraddress;
    
   @Column (nullable = true)
   private Long phonenumber;

    @Column (nullable = true)
    private String gender;

   @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return email;
        // throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    }
    // @Override
    // public String getEmail() {
    //     // TODO Auto-generated method stub
    //     return email;
    //     // throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    // }
    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return password;
        // throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
        // throw new UnsupportedOperationException("Unimplemented method 'isAccountNonExpired'");
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'isAccountNonLocked'");
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
        // throw new UnsupportedOperationException("Unimplemented method 'isCredentialsNonExpired'");
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
        // throw new UnsupportedOperationException("Unimplemented method 'isEnabled'");
    }

}