package com.ivan.test;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class TypeConversionExample {

    @Test
    public void method1(){
        List<String> list1 = new ArrayList<>();
        list1.add("a");
        list1.add("b");
        list1.add("c");
        Iterator<String> iterator = list1.iterator();
        while (iterator.hasNext()) {
            String next = iterator.next();
            System.out.println(next);
        }
    }

    @Test
    public void method2(){
        double pei = 3.14;
        int i = (int) pei;
        System.out.println(i);
        System.out.println(pei);
    }
}
