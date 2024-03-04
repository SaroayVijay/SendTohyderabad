package com.example.task2.service;

import com.example.task2.dto.LoginDto;
import com.example.task2.dto.RegisterDto;


public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
