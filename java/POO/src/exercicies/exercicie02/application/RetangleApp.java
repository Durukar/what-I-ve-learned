package exercicies.exercicie02.application;

import exercicies.exercicie02.entities.RetangleEntity;

import java.util.Locale;
import java.util.Scanner;

public class RetangleApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        RetangleEntity retangle = new RetangleEntity();

        // chamada
        System.out.println(" ");
        System.out.println("Enter retangle width and height");

        System.out.print("Informe a largura ->");
        retangle.width = sc.nextDouble();

        System.out.print("");
        System.out.print("Informe a altura ->");
        retangle.height = sc.nextDouble();

        System.out.println(retangle);
    }
}
