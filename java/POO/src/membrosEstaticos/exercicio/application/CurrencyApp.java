package membrosEstaticos.exercicio.application;

import membrosEstaticos.exercicio.util.CurrencyConverter;

import java.util.Locale;
import java.util.Scanner;

public class CurrencyApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.printf("What is the dollar price? ");
        double dolarInput = sc.nextDouble();
        System.out.printf("How many dollars will be bought? ");
        double dolarBuy = sc.nextDouble();
        System.out.printf("Amount to be paid in reais = %.2f%n", CurrencyConverter.dolarConverter(dolarInput, dolarBuy));
    }
}
