package com.salutho.backend;

import com.salutho.backend.MMCService;

public class TesteMMCConsole {
    public static void main(String[] args) {
        MMCService mmcService = new MMCService();

        int resultadoMMC = mmcService.calcularMMCintervalo(1, 10);
        System.out.println("MMC de 1 a 10: " + resultadoMMC);

        resultadoMMC = mmcService.calcularMMCintervalo(1, 5);
        System.out.println("MMC de 1 a 5: " + resultadoMMC);

        resultadoMMC = mmcService.calcularMMCintervalo(5, 7);
        System.out.println("MMC de 5 a 7: " + resultadoMMC);

        int resultadoMDC = mmcService.mdc(48, 18);
        System.out.println("MDC de 48 e 18: " + resultadoMDC);

        resultadoMDC = mmcService.mdc(100, 25);
        System.out.println("MDC de 100 e 25: " + resultadoMDC);

        resultadoMDC = mmcService.mdc(7, 5);
        System.out.println("MDC de 7 e 5: " + resultadoMDC);
    }
}
