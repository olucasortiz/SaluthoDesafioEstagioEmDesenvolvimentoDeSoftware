package com.salutho.backend;

import jdk.jfr.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api")
public class MMCController {
    private final MMCService mmcService;

    public MMCController(MMCService mmcService) {
        this.mmcService = mmcService;
    }

    @PostMapping("/calcular")
    public ResponseEntity<?> calcular(@RequestBody IntervaloDTO intervalo) {
        int inicio = intervalo.getInicio();
        int fim = intervalo.getFim();
        if(inicio<=0 || fim<=0 || inicio>=fim)
            return ResponseEntity.badRequest().body("Intervalo inválido: o início deve ser menor que o fim, e ambos devem ser inteiros positivos");
        else{
            int resultado = mmcService.calcularMMCintervalo(inicio, fim);
            return ResponseEntity.ok(new ResultadoDTO(resultado));
        }
    }
}
