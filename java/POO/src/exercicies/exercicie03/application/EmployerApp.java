package exercicies.exercicie03.application;

import exercicies.exercicie03.entities.EmployeeEntity;

import java.util.Locale;
import java.util.Scanner;

public class EmployerApp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        EmployeeEntity employee = new EmployeeEntity();

        System.out.print("Name: ");
        employee.name = sc.nextLine();
        System.out.print("Gross salary: ");
        employee.grossSalary = sc.nextDouble();
        System.out.print("Tax: ");
        employee.tax = sc.nextDouble();
        System.out.println(" ");
        System.out.print("Employer: " + employee.name + ", " + "$" + employee.NetSalary());
        System.out.print(" ");
        System.out.print("Which percentage to increase salary? ");
        double increase = sc.nextDouble();
        employee.IncreaseSalary(increase);
        System.out.println("Updated data: " + employee.name + ", " + "$" + employee.grossSalary );
        System.out.println(" ");
        System.out.println(employee);
        sc.close();
    }
}
