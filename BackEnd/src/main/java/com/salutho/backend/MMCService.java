package com.salutho.backend;

import org.springframework.stereotype.Service;

@Service
public class MMCService {

    public int mdc(int a,int b){
        if(b==0){
            return a;
        }else{
            return mdc(b,a%b);//recursividade
        }
    }

    public int mmc(int a, int b) {
        return Math.abs(a * b)/mdc(a,b);
    }

    public int calcularMMCintervalo(int inicio, int fim){
        int resultado = 1;
        for(int i = inicio; i <= fim; i++){
            resultado = mmc(resultado,i);
        }
        return resultado;
    }
}
