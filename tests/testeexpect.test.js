import { 
    assert,
    assertAlmostEquals,
    assertEquals,
    assertNotEquals,
    assertFalse,
    assertGreaterOrEqual,
    assertExists,
    assertLess
} from "https://deno.land/std@0.223.0/assert/mod.ts";
Deno.test("Teste assertAlmostEquals", () => {
    assertAlmostEquals(100, 120, 20); 
    //Verifica se dois primeiro numeros sao "quase iguais", no caso se um é igual a um outro com uma margem de erro que seria o terceiro valor
});

Deno.test("Teste assert", () => {
    assert(5 > 2);
    //Veifica se valor é verdadeiro, tipo um if, se for falso ele da erro
});

Deno.test("Teste assertEquals", () => {
    assertEquals(10, 10);
    //mesma coisa que um ===, verifica se é igual, profundamente igual
});

Deno.test("Teste assertNotEquals", () => {
    assertNotEquals(10, 20);
    //mesma coisa que um !=, verifica se é diferente
});

Deno.test("Teste assertExists", () => {
    const obj = { key: "value" };
    assertExists(obj.key);
    //verifica se existe, nesse caso se dentro o obj possui a propriedade key
});

Deno.test("Teste assertFalse", () => {
    assertFalse(0);
    //verifica se o valor é falso
});

Deno.test("Teste assertLess", () => {
    assertLess(9, 10);
    //verifica se o primeiro valor é menor que o segundo
});

Deno.test("Teste assertGreaterOrEqual", () => {
    assertGreaterOrEqual(11, 10);
    //verifica se o primeiro valor é maior ou igual ao segundo
});