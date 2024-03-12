package com.ivan.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/user")
public class UserServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");//根据参数名获取参数值，无论参数是在url?后面还是在请求体中
        //根据用户名判断用户是否存在
        resp.setHeader("Content-Type", "text/html");
        resp.setContentType("text/html;charset=utf-8");
        if("admin".equals(username)) {
            resp.getWriter().write("true");
        } else {
            resp.getWriter().write("false");

        }
    }
}
