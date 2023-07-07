package exercicies.exercicie02.entities;

import java.util.Locale;

public class RetangleEntity {
    public double width;
    public double height;

    public double Area() {
        double area;
        return area = width * height;
    }

    public double Perimeter() {
        double perimetro;
        return perimetro = 2 * (width + height);
    }

    public double Diagonal() {
        double diagonal;
        width = Math.pow(width, 2);
        height = Math.pow(height, 2);
        diagonal = width + height;
        return diagonal = Math.sqrt(diagonal);
    }
    public String toString(){
        return "Area = "
                + String.format("%.2f", Area())
                + System.lineSeparator()
                + "PERIMETER = "
                + String.format("%.2f", Perimeter())
                + System.lineSeparator()
                + "DIAGONAL = "
                + String.format("%.2f", Diagonal());
    }
}
