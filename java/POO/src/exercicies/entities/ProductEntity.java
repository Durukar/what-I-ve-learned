package exercicies.entities;

import java.util.Scanner;

public class ProductEntity {
    Scanner sc = new Scanner(System.in);
    private String name;
    private double price;
    private int quantity;

    public void produtoPrint() {
        System.out.print("Product is: ");
        System.out.println(name + ", "+ price + ", "+ quantity);
    }

    public String setName() {
        return name = sc.next();
    }

    public double totalValueInStock() {
        return quantity * price;
    }

    public void addProducts(int quantity) {
        this.quantity += quantity;
    }

    public void removeProducts(int quantity) {
        this.quantity = this.quantity - quantity;
        System.out.println("A quantidade de produtos agora é -> " + this.quantity);
    }

    public double setPrice() {
        return price = sc.nextDouble();
    }

    public int setQuantity() {
        return quantity = sc.nextInt();
    }

    public String toString() {
        return name
                + ", $ "
                + String.format("%.2f", price)
                + ", "
                + quantity
                + " units, Total: $ "
                + String.format("%.2f", totalValueInStock());
    }
}
