package application;

import java.util.Locale;
import java.util.Scanner;

public class ProgramOne {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double xA, xB, xC, yA, yB, yC;

        // Measures of triangle X
        System.out.println("Enter the measures of triangle X:" );
        xA = sc.nextDouble();
        xB = sc.nextDouble();
        xC = sc.nextDouble();

        // Measures of triangle Y
        System.out.println("Enter the measures of triangle Y: ");
        yA = sc.nextDouble();
        yB = sc.nextDouble();
        yC = sc.nextDouble();

        // Variables
        double p, areaX, areaY ;

        p = (xA + xB + xC) / 2.0;
        areaX = Math.sqrt(p * (p - xA) * (p - xB) * (p - xC));

        p = (yA + yB + yC) / 2.0;
        areaY  = Math.sqrt(p * (p - yA) * (p - yB) * (p - yC));

        System.out.printf("TriangleEntity X area: %.4f%n", areaX);
        System.out.printf("TriangleEntity Y area: %.4f%n", areaY);

        if (areaX > areaY) {
            System.out.println("Larger area: X");
        } else {
            System.out.println("Larger area: Y ");
        }


        sc.close();
    }
}
