package Vetores.application;

import java.util.Locale;
import java.util.Scanner;

public class VetorApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        // Tamanho do vetor
        System.out.print("Digite o tamanho do vetor ->");
        int n = sc.nextInt();

        // criaçao do vetor
        double[] vect = new double[n];

        // laço incremental de valor no vetor
        for(int i=0; i < n; i++) {
            System.out.print("Digite o valor do vetor ->");
            vect[i] = sc.nextDouble();
        }

        // somar os valores do vetor
        double sum = 0;
        for (int i=0; i<n; i++){
            sum += vect[i];
        }

        // calcular a media (total de vetores / numero de vetores)
        double avg = sum /n;

        System.out.printf("AVERAGE HEIGHT: %.2f", avg);

        sc.close();
    }
}
