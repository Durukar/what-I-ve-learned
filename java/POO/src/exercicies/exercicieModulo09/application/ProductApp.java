package exercicies.exercicieModulo09.application;

import exercicies.exercicieModulo09.entities.ProductEntity;

import java.util.Locale;
import java.util.Scanner;

public class ProductApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter product data: ");
        System.out.print("Name: ");
        String name = sc.next();
        System.out.print("Price: ");
        double price= sc.nextDouble();
//        System.out.print("Quantity in stock: ");
//        int quantity = sc.nextInt();

        //Constructor
        ProductEntity product = new ProductEntity(name, price);

        product.setName("Computer");
        System.out.println("Updated name: " +  product.getName());
        product.setPrice(1200);
        System.out.println("Updated price: " + product.getPrice());

        System.out.println(" ");
        System.out.println("Product data: " + product);
        System.out.println(" ");
        System.out.println("Enter the number of products to be added in stock: ");
        int quantity = sc.nextInt();
        product.addProducts(quantity);

        System.out.println();
        System.out.println("Updated data: " + product);

        System.out.println();
        System.out.println("Enter the number of products to be removed from stock: ");
        quantity = sc.nextInt();
        product.removeProducts(quantity);

        System.out.println();
        System.out.println("Updated data: " + product);

        sc.close();
    }
}