package exercicies.application;

import exercicies.entities.ProductEntity;

import java.util.Locale;
import java.util.Scanner;

public class ProductApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        ProductEntity product = new ProductEntity();

        System.out.println("Enter product data: ");
        System.out.print("Name: ");
        product.setName();
        System.out.print("Price: ");
        product.setPrice();
        System.out.print("Quantity in stock: ");
        product.setQuantity();
        product.produtoPrint();

        sc.close();
    }
}
